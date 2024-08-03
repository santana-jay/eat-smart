<script>
    import { onMount } from "svelte";
    import { BrowserMultiFormatReader } from "@zxing/library";
    import axios from "axios";

    let videoRef;
    let scanResult = "";
    let scanning = false;
    let errorMessage = "";
    let successMessage = "";
    let nutritionFacts = null;
    let productDetails = null;
    let healthAnalysis = "";

    const OpenAiAPIKey =
        "";

    const fetchHealthAnalysis = async (productDetails) => {
        const prompt = `Analyze the healthiness of this food item based on the following details: Name: ${productDetails.name}, Ingredients: ${productDetails.ingredients}, Nutrition Facts: ${JSON.stringify(nutritionFacts)}. Provide insights on the long term and short term effects of consuming this item.`;

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content:
                                "You are a friendly health analyst here to help us understand food products. Imagine you're talking to a kid about the best and worst things in this food item. What are the short-term effects of eating it, like energy or mood changes? What might happen if someone eats it often over a long time? Is it good for us, or should we avoid it? Use simple words and ideas, like how you would explain it to a child, so that everyone can understand!",
                        },
                        {
                            role: "user",
                            content: prompt,
                        },
                    ],
                    max_tokens: 1000,
                },
                {
                    headers: {
                        Authorization: `Bearer ${OpenAiAPIKey}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.choices && response.data.choices.length > 0) {
                healthAnalysis =
                    response.data.choices[0].message.content.trim();
            } else {
                healthAnalysis = "No insightful response received.";
            }
        } catch (error) {
            console.error("Failed to fetch health analysis:", error);
            healthAnalysis = "Failed to analyze health information.";
        }
    };

    // Initialize the barcode reader
    const codeReader = new BrowserMultiFormatReader();

    // Function to start scanning
    const startScanning = () => {
        errorMessage = ""; // Clear previous errors
        successMessage = ""; // Clear previous success message
        scanResult = ""; // Clear previous results
        nutritionFacts = null; // Clear previous nutrition facts
        scanning = true;

        codeReader
            .listVideoInputDevices()
            .then((videoInputDevices) => {
                if (videoInputDevices.length === 0) {
                    errorMessage = "No camera devices found.";
                    scanning = false;
                    return;
                }

                const selectedDeviceId = videoInputDevices[0]?.deviceId;

                codeReader.decodeFromVideoDevice(
                    selectedDeviceId,
                    videoRef,
                    async (result, error) => {
                        if (result) {
                            scanResult = result.getText();
                            successMessage = "Scan Complete!";
                            scanning = false;
                            codeReader.reset(); // Stop scanning after a successful scan
                            await fetchNutritionData(scanResult);
                        }
                        if (error && !result) {
                            console.error(error);
                            errorMessage = "Failed to decode the barcode.";
                        }
                    }
                );
            })
            .catch((err) => {
                console.error(err);
                errorMessage = "Error accessing video devices.";
                scanning = false;
            });
    };

    const fetchNutritionData = async (barcode) => {
        try {
            const response = await axios.get(
                `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
            );

            if (response.data && response.data.status === 1) {
                const { product } = response.data;
                nutritionFacts = product.nutriments; // Keep the nutritional data
                productDetails = {
                    name: product.product_name,
                    brands: product.brands,
                    ingredients: product.ingredients_text,
                    allergens: product.allergens_hierarchy
                        .map((allergen) => allergen.replace("en:", ""))
                        .join(", "),
                    labels: product.labels_tags
                        .map((label) => label.replace("en:", ""))
                        .join(", "),
                    packaging: product.packaging,
                    packagingInfo: product.packaging_text,
                };

                // Call the function to fetch health analysis now that we have the product details
                await fetchHealthAnalysis(productDetails);
            } else {
                errorMessage = "Product not found.";
            }
        } catch (err) {
            console.error(err);
            errorMessage = "Failed to fetch nutrition data.";
        }
    };

    onMount(() => {
        return () => {
            // Clean up by resetting the code reader when the component is destroyed
            codeReader.reset();
        };
    });
</script>

<div
    class="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg"
>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoRef} class="hidden" playsinline></video>
    {#if scanning}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
            bind:this={videoRef}
            class="w-full max-w-lg border border-gray-300 rounded-lg"
            playsinline
        ></video>
        <p class="text-lg text-gray-700">Scanning...</p>
    {/if}
    <button
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        on:click={startScanning}
        disabled={scanning}
    >
        {scanning ? "Scanning..." : "Start Scanner"}
    </button>
    {#if errorMessage}
        <p class="text-red-600">{errorMessage}</p>
    {/if}
    {#if successMessage}
        <p class="text-green-600">{successMessage}</p>
    {/if}
    {#if scanResult}
        <div class="text-center">
            <p class="text-xl font-bold text-green-600">
                Barcode Number: {scanResult}
            </p>
        </div>
    {/if}
    {#if healthAnalysis}
        <div
            class="text-left mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-lg"
        >
            <h2 class="text-xl font-semibold text-gray-900">Health Analysis</h2>
            <p>{healthAnalysis}</p>
        </div>
    {/if}
    {#if productDetails}
        <div
            class="text-left mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-lg"
        >
            <h2 class="text-xl font-semibold text-gray-900 mb-2">
                Product Details
            </h2>
            <p><strong>Name:</strong> {productDetails.name}</p>
            <p><strong>Brands:</strong> {productDetails.brands}</p>
            <p><strong>Ingredients:</strong> {productDetails.ingredients}</p>
            <p><strong>Allergens:</strong> {productDetails.allergens}</p>
            <p><strong>Labels:</strong> {productDetails.labels}</p>
            <p>
                <strong>Packaging:</strong>
                {productDetails.packaging}, {productDetails.packagingInfo}
            </p>
        </div>
    {/if}
    {#if nutritionFacts}
        <div
            class="text-left mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-lg"
        >
            <h2 class="text-xl font-semibold text-gray-900 mb-2">
                Nutrition Facts
            </h2>
            <ul class="list-disc list-inside">
                {#each Object.entries(nutritionFacts) as [key, value]}
                    <li>
                        <strong class="capitalize"
                            >{key.replace(/_/g, " ")}:</strong
                        >
                        {value}
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>
