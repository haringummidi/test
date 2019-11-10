// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

(function() {
"use strict";

  module.exports = {

    // Replace with your own subscription key, service region (e.g., "westus"),
    // and recognition language.
    subscriptionKey:   "a1032e5997344a17a33fbbe399989a39",
    serviceRegion:     "westeurope", // e.g., "westus"
    language:          "en-US",

    // Replace with the full path to a wav file you want to recognize.
    filename:          "test.wav", // 16000 Hz, Mono

    // Replace with your own Language Understanding subscription key (endpoint
    // key), region, and app ID in case you want to run the intent sample.
    luSubscriptionKey: "YourLanguageUnderstandingSubscriptionKey",
    luServiceRegion:   "YourLanguageUnderstandingServiceRegion",
    luAppId:           "YourLanguageUnderstandingAppId",
  };
  }());
