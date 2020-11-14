import { FastifyPluginAsync } from 'fastify';
import { quoteData } from '../data/quote-data';
import { randomQuote } from '../utils/util';

const quotes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/quotes', async function (request, reply) {
        return quoteData;
    });

    fastify.get('/quote', async function (request, reply) {
        return randomQuote(quoteData);
    });

    // fastify.get('/quote/:id', async function (request, reply) {
    //     return quoteData;
    // });
};

export default quotes;
