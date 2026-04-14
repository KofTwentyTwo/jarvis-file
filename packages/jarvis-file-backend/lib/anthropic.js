/**
 * Anthropic Claude API client wrapper.
 *
 * Creates and configures the Claude client for chat responses
 * and change processing.
 */

"use strict";

const Anthropic = require("@anthropic-ai/sdk");

/**
 * Create a configured Anthropic client.
 * @param {object} config - Jarvis File config object
 * @returns {object} Object with chat() and agent() methods
 */
function createClient(config) {
   const client = new Anthropic();

   return {
      /**
       * Generate a chat response.
       * @param {string} systemPrompt - System prompt with context
       * @param {Array} messages - Conversation history
       * @returns {Promise<string>} Response text
       */
      async chat(systemPrompt, messages) {
         const response = await client.messages.create({
            model: config.assistant.model,
            max_tokens: config.assistant.maxReplyTokens || 200,
            system: systemPrompt,
            messages,
         });
         return response.content[0].text;
      },

      /**
       * Get the underlying Anthropic client for Agent SDK usage.
       * @returns {Anthropic} Raw client instance
       */
      raw() {
         return client;
      },
   };
}

module.exports = { createClient };
