export interface IQuotes {
    category: string;
    medium: string;
    text: string;
    post_id?: string;
    email_id?: string;
    date: string;
}

// Credit to https://satoshi.nakamotoinstitute.org/quotes/ for the quotes data
// https://github.com/NakamotoInstitute/nakamotoinstitute.org
export const quoteData: IQuotes[] = [
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            "It would have been nice to get this attention in any other context.  WikiLeaks has kicked the hornet's nest, and the swarm is headed towards us.",
        post_id: '542',
        date: 'December 11, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            'The project needs to grow gradually so the software can be strengthened along the way. I make this appeal to WikiLeaks not to try to use Bitcoin.  Bitcoin is a small beta community in its infancy.',
        post_id: '523',
        date: 'December 5, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            "I'm happy if someone with artistic skill wants to contribute alternatives.  The icon/logo was meant to be good as an icon at the 16x16 and 20x20 pixel sizes.  I think it's the best program icon, but there's room for improvement at larger sizes for a graphic for use on websites. It'll be a lot simpler if authors could make their graphics public domain.",
        post_id: '500',
        date: 'November 13, 2010',
    },
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            'I wish rather than deleting the article, they put a length restriction.  If something is not famous enough, there could at least be a stub article identifying what it is.  I often come across annoying red links of things that Wiki ought to at least have heard of. \nThe article could be as simple as something like: "Bitcoin is a peer-to-peer decentralised /link/electronic currency/link/." \nThe more standard Wiki thing to do is that we should have a paragraph in one of the more general categories that we are an instance of, like Electronic Currency or Electronic Cash.  We can probably establish a paragraph there.  Again, keep it short.  Just identifying what it is.',
        post_id: '467',
        date: 'September 30, 2010',
    },
    {
        category: 'transactions',
        medium: 'bitcointalk',
        text:
            "As you figured out, the root problem is we shouldn't be counting or spending transactions until they have at least 1 confirmation.  0/unconfirmed transactions are very much second class citizens.  At most, they are advice that something has been received, but counting them as balance or spending them is premature.",
        post_id: '464',
        date: 'September 30, 2010',
    },
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            "Bitcoin would be convenient for people who don't have a credit card or don't want to use the cards they have, either don't want the spouse to see it on the bill or don't trust giving their number to \"porn guys\", or afraid of recurring billing.",
        post_id: '460',
        date: 'September 23, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            "I don't know anything about any of the bug trackers.  If we were to have one, we would have to make a thoroughly researched choice. We're managing pretty well just using the forum.  I'm more likely to see bugs posted in the forum, and I think other users are much more likely to help resolve and ask follow up questions here than if they were in a bug tracker.  A key step is other users helping resolve the simple stuff that's not really a bug but some misunderstanding or confusion. I keep a list of all unresolved bugs I've seen on the forum.  In some cases, I'm still thinking about the best design for the fix.  This isn't the kind of software where we can leave so many unresolved bugs that we need a tracker for them.",
        post_id: '454',
        date: 'September 19, 2010',
    },
    {
        category: 'scalability',
        medium: 'bitcointalk',
        text:
            "The threshold can easily be changed in the future.  We can decide to increase it when the time comes.  It's a good idea to keep it lower as a circuit breaker and increase it as needed.  If we hit the threshold now, it would almost certainly be some kind of flood and not actual use.  Keeping the threshold lower would help limit the amount of wasted disk space in that event.",
        post_id: '441',
        date: 'September 8, 2010',
    },
    {
        category: 'fees',
        medium: 'bitcointalk',
        text:
            "Currently, paying a fee is controlled manually with the -paytxfee switch.  It would be very easy to make the software automatically check the size of recent blocks to see if it should pay a fee.  We're so far from reaching the threshold, we don't need that yet.  It's a good idea to see how things go with controlling it manually first anyway.",
        post_id: '441',
        date: 'September 8, 2010',
    },
    {
        category: 'fees, nodes',
        medium: 'bitcointalk',
        text:
            "Another option is to reduce the number of free transactions allowed per block before transaction fees are required.  Nodes only take so many KB of free transactions per block before they start requiring at least 0.01 transaction fee. The threshold should probably be lower than it currently is. I don't think the threshold should ever be 0.  We should always allow at least some free transactions.",
        post_id: '439',
        date: 'September 7, 2010',
    },
    {
        category: 'economics',
        medium: 'bitcointalk',
        text:
            "As a thought experiment, imagine there was a base metal as scarce as gold but with the following properties:\n- boring grey in colour\n- not a good conductor of electricity\n- not particularly strong, but not ductile or easily malleable either\n- not useful for any practical or ornamental purpose\n\nand one special, magical property:\n- can be transported over a communications channel\n\nIf it somehow acquired any value at all for whatever reason, then anyone wanting to transfer wealth over a long distance could buy some, transmit it, and have the recipient sell it.\n\nMaybe it could get an initial value circularly as you've suggested, by people foreseeing its potential usefulness for exchange.  (I would definitely want some)  Maybe collectors, any random reason could spark it.\n\nI think the traditional qualifications for money were written with the assumption that there are so many competing objects in the world that are scarce, an object with the automatic bootstrap of intrinsic value will surely win out over those without intrinsic value.  But if there were nothing in the world with intrinsic value that could be used as money, only scarce but no intrinsic value, I think people would still take up something.\n\n(I'm using the word scarce here to only mean limited potential supply)",
        post_id: '428',
        date: 'August 27, 2010',
    },
    {
        category: 'bitcoin-economics',
        medium: 'bitcointalk',
        text:
            'Bitcoins have no dividend or potential future dividend, therefore not like a stock.\n\nMore like a collectible or commodity.',
        post_id: '427',
        date: 'August 27, 2010',
    },
    {
        category: 'proof-of-work',
        medium: 'bitcointalk',
        text:
            'There is no way for the software to automatically know if one chain is better than another except by the greatest proof-of-work.  In the design it was necessary for it to switch to a longer chain no matter how far back it has to go.',
        post_id: '394',
        date: 'August 16, 2010',
    },
    {
        category: 'mining',
        medium: 'bitcointalk',
        text:
            "Some places where generation will gravitate to: \n1) places where it's cheapest or free\n2) people who want to help for idealogical reasons\n3) people who want to get some coins without the inconvenience of doing a transaction to buy them\n\nThere are legitimate places where it's free.  Generation is basically free anywhere that has electric heat, since your computer's heat is offsetting your baseboard electric heating.  Many small flats have electric heat out of convenience.",
        post_id: '364',
        date: 'August 15, 2010',
    },
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            "Then you must also be against the common system of payment up front, where the customer loses.\nPayment up front: customer loses, and the thief gets the money.\nSimple escrow: customer loses, but the thief doesn't get the money either.\nAre you guys saying payment up front is better, because at least the thief gets the money, so at least someone gets it?\nImagine someone stole something from you.  You can't get it back, but if you could, if it had a kill switch that could be remote triggered, would you do it?  Would it be a good thing for thieves to know that everything you own has a kill switch and if they steal it, it'll be useless to them, although you still lose it too?  If they give it back, you can re-activate it.\nImagine if gold turned to lead when stolen.  If the thief gives it back, it turns to gold again.\nIt still seems to me the problem may be one of presenting it the right way.  For one thing, not being so blunt about \"money burning\" for the purposes of game theory discussion.  The money is never truly burned.  You have the option to release it at any time forever.",
        post_id: '340',
        date: 'August 11, 2010',
    },
    {
        category: 'mining',
        medium: 'bitcointalk',
        text:
            "The heat from your computer is not wasted if you need to heat your home.  If you're using electric heat where you live, then your computer's heat isn't a waste.  It's equal cost if you generate the heat with your computer. \nIf you have other cheaper heating than electric, then the waste is only the difference in cost.\nIf it's summer and you're using A/C, then it's twice. \nBitcoin generation should end up where it's cheapest.  Maybe that will be in cold climates where there's electric heat, where it would be essentially free.",
        post_id: '337',
        date: 'August 9, 2010',
    },
    {
        category: 'bitcoin-economics',
        medium: 'bitcointalk',
        text:
            "It's the same situation as gold and gold mining.  The marginal cost of gold mining tends to stay near the price of gold.  Gold mining is a waste, but that waste is far less than the utility of having gold available as a medium of exchange. \nI think the case will be the same for Bitcoin.  The utility of the exchanges made possible by Bitcoin will far exceed the cost of electricity used.  Therefore, not having Bitcoin would be the net waste.",
        post_id: '327',
        date: 'August 7, 2010',
    },
    {
        category: 'proof-of-work',
        medium: 'bitcointalk',
        text:
            "Proof-of-work has the nice property that it can be relayed through untrusted middlemen.  We don't have to worry about a chain of custody of communication.  It doesn't matter who tells you a longest chain, the proof-of-work speaks for itself.",
        post_id: '327',
        date: 'August 7, 2010',
    },
    {
        category: 'micropayments',
        medium: 'bitcointalk',
        text:
            "Forgot to add the good part about micropayments.  While I don't think Bitcoin is practical for smaller micropayments right now, it will eventually be as storage and bandwidth costs continue to fall.  If Bitcoin catches on on a big scale, it may already be the case by that time.  Another way they can become more practical is if I implement client-only mode and the number of network nodes consolidates into a smaller number of professional server farms.  Whatever size micropayments you need will eventually be practical.  I think in 5 or 10 years, the bandwidth and storage will seem trivial.",
        post_id: '318',
        date: 'August 5, 2010',
    },
    {
        category: 'micropayments',
        medium: 'bitcointalk',
        text:
            "Bitcoin isn't currently practical for very small micropayments.  Not for things like pay per search or per page view without an aggregating mechanism, not things needing to pay less than 0.01.  The dust spam limit is a first try at intentionally trying to prevent overly small micropayments like that. \nBitcoin is practical for smaller transactions than are practical with existing payment methods.  Small enough to include what you might call the top of the micropayment range.  But it doesn't claim to be practical for arbitrarily small micropayments.",
        post_id: '317',
        date: 'August 4, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            "Actually, it works well to just PM me.  I'm the one who's going to be fixing it.  If you find a security flaw, I would definitely like to hear from you privately to fix it before it goes public.",
        post_id: '294',
        date: 'July 29, 2010',
    },
    {
        category: 'nodes',
        medium: 'bitcointalk',
        text:
            "The current system where every user is a network node is not the intended configuration for large scale.  That would be like every Usenet user runs their own NNTP server.  The design supports letting users just be users.  The more burden it is to run a node, the fewer nodes there will be.  Those few nodes will be big server farms.  The rest will be client nodes that only do transactions and don't generate.",
        post_id: '287',
        date: 'July 29, 2010',
    },
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            "For future reference, here's my public key.  It's the same one that's been there since the bitcoin.org site first went up in 2008.  Grab it now in case you need it later. http://www.bitcoin.org/Satoshi_Nakamoto.asc",
        post_id: '276',
        date: 'July 25, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            'By making some adjustments to the database settings, I was able to make the initial block download about 5 times faster.  It downloads in about 30 minutes. \n \nThe database default had it writing each block to disk synchronously, which is not necessary.  I changed the settings to let it cache the changes in memory and write them out in a batch.  Blocks are still written transactionally, so either the complete change occurs or none of it does, in either case the data is left in a valid state. \n \nI only enabled this change during the initial block download.  When you come within 2000 blocks of the latest block, these changes turn off and it slows down to the old way.',
        post_id: '258',
        date: 'July 23, 2010',
    },
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            "The timing is strange, just as we are getting a rapid increase in 3rd party coverage after getting slashdotted.  I hope there's not a big hurry to wrap the discussion and decide.  How long does Wikipedia typically leave a question like that open for comment? \nIt would help to condense the article and make it less promotional sounding as soon as possible.  Just letting people know what it is, where it fits into the electronic money space, not trying to convince them that it's good.  They probably want something that just generally identifies what it is, not tries to explain all about how it works.",
        post_id: '249',
        date: 'July 10, 2010',
    },
    {
        category: 'difficulty',
        medium: 'bitcointalk',
        text:
            'Right, the difficulty adjustment is trying to keep it so the network as a whole generates an average of 6 blocks per hour.  The time for your block to mature will always be around 20 hours.',
        post_id: '225',
        date: 'July 16, 2010',
    },
    {
        category: 'difficulty',
        medium: 'bitcointalk',
        text:
            'Difficulty just increased by 4 times, so now your cost is US$0.02/BTC.',
        post_id: '223',
        date: 'July 16, 2010',
    },
    {
        category: 'scalability, nodes',
        medium: 'bitcointalk',
        text:
            "The design outlines a lightweight client that does not need the full block chain.  In the design PDF it's called Simplified Payment Verification.  The lightweight client can send and receive transactions, it just can't generate blocks.  It does not need to trust a node to verify payments, it can still verify them itself. \nThe lightweight client is not implemented yet, but the plan is to implement it when it's needed.  For now, everyone just runs a full network node.",
        post_id: '188',
        date: 'July 14, 2010',
    },
    {
        category: 'scalability, nodes',
        medium: 'bitcointalk',
        text:
            "I anticipate there will never be more than 100K nodes, probably less.  It will reach an equilibrium where it's not worth it for more nodes to join in.  The rest will be lightweight clients, which could be millions.",
        post_id: '188',
        date: 'July 14, 2010',
    },
    {
        category: 'nodes',
        medium: 'bitcointalk',
        text:
            'At equilibrium size, many nodes will be server farms with one or two network nodes that feed the rest of the farm over a LAN.',
        post_id: '188',
        date: 'July 14, 2010',
    },
    {
        category: 'economics',
        medium: 'bitcointalk',
        text:
            "When someone tries to buy all the world's supply of a scarce asset, the more they buy the higher the price goes.  At some point, it gets too expensive for them to buy any more.  It's great for the people who owned it beforehand because they get to sell it to the corner at crazy high prices.  As the price keeps going up and up, some people keep holding out for yet higher prices and refuse to sell.",
        post_id: '174',
        date: 'July 9, 2010',
    },
    {
        category: 'releases',
        medium: 'bitcointalk',
        text:
            "Announcing version 0.3 of Bitcoin, the P2P cryptocurrency!  Bitcoin is a digital currency using cryptography and a distributed network to replace the need for a trusted central server.  Escape the arbitrary inflation risk of centrally managed currencies!  Bitcoin's total circulation is limited to 21 million coins.  The coins are gradually released to the network's nodes based on the CPU proof-of-worker they contribute, so you can get a share of them by contributing your idle CPU time.",
        post_id: '168',
        date: 'July 6, 2010',
    },
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            "Writing a description for this thing for general audiences is bloody hard.  There's nothing to relate it to.",
        post_id: '167',
        date: 'July 5, 2010',
    },
    {
        category: 'bitcoin-economics',
        medium: 'bitcointalk',
        text:
            "Lost coins only make everyone else's coins worth slightly more.  Think of it as a donation to everyone.",
        post_id: '131',
        date: 'June 21, 2010',
    },
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            "Excellent choice of a first project, nice work.  I had planned to do this exact thing if someone else didn't do it, so when it gets too hard for mortals to generate 50BTC, new users could get some coins to play with right away.  Donations should be able to keep it filled.  The display showing the balance in the dispenser encourages people to top it up.\n\nYou should put a donation bitcoin address on the page for those who want to add funds to it, which ideally should update to a new address whenever it receives something.",
        post_id: '129',
        date: 'June 18, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            "Since 2007.  At some point I became convinced there was a way to do this without any trust required at all and couldn't resist to keep thinking about it.  Much more of the work was designing than coding.\n\nFortunately, so far all the issues raised have been things I previously considered and planned for.",
        post_id: '127',
        date: 'June 18, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            "The nature of Bitcoin is such that once version 0.1 was released, the core design was set in stone for the rest of its lifetime.  Because of that, I wanted to design it to support every possible transaction type I could think of.  The problem was, each thing required special support code and data fields whether it was used or not, and only covered one special case at a time.  It would have been an explosion of special cases.  The solution was script, which generalizes the problem so transacting parties can describe their transaction as a predicate that the node network evaluates.  The nodes only need to understand the transaction to the extent of evaluating whether the sender's conditions are met.",
        post_id: '126',
        date: 'June 17, 2010',
    },
    {
        category: 'transactions, bitcoin-design',
        medium: 'bitcointalk',
        text:
            "The design supports a tremendous variety of possible transaction types that I designed years ago.  Escrow transactions, bonded contracts, third party arbitration, multi-party signature, etc.  If Bitcoin catches on in a big way, these are things we'll want to explore in the future, but they all had to be designed at the beginning to make sure they would be possible later.",
        post_id: '126',
        date: 'June 17, 2010',
    },
    {
        category: 'encryption',
        medium: 'bitcointalk',
        text:
            "SHA-256 is very strong.  It's not like the incremental step from MD5 to SHA1.  It can last several decades unless there's some massive breakthrough attack.",
        post_id: '119',
        date: 'June 14, 2010',
    },
    {
        category: 'encryption',
        medium: 'bitcointalk',
        text:
            'If SHA-256 became completely broken, I think we could come to some agreement about what the honest block chain was before the trouble started, lock that in and continue from there with a new hash function.',
        post_id: '119',
        date: 'June 14, 2010',
    },
    {
        category: 'releases',
        medium: 'bitcointalk',
        text:
            'Does anyone want to translate the Bitcoin client itself?  It would be great to have at least one other language in the 0.3 release.',
        post_id: '111',
        date: 'May 26, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            "Simplified Payment Verification is for lightweight client-only users who only do transactions and don't generate and don't participate in the node network.  They wouldn't need to download blocks, just the hash chain, which is currently about 2MB and very quick to verify (less than a second to verify the whole chain).  If the network becomes very large, like over 100,000 nodes, this is what we'll use to allow common users to do transactions without being full blown nodes.  At that stage, most users should start running client-only software and only the specialist server farms keep running full network nodes, kind of like how the usenet network has consolidated. \nSPV is not implemented yet, and won't be implemented until far in the future, but all the current implementation is designed around supporting it.",
        post_id: '105',
        date: 'May 18, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            "Bitcoin addresses you generate are kept forever.  A bitcoin address must be kept to show ownership of anything sent to it.  If you were able to delete a bitcoin address and someone sent to it, the money would be lost.  They're only about 500 bytes.",
        post_id: '102',
        date: 'May 16, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            "When you generate a new bitcoin address, it only takes disk space on your own computer (like 500 bytes).  It's like generating a new PGP private key, but less CPU intensive because it's ECC.  The address space is effectively unlimited.  It doesn't hurt anyone, so generate all you want.",
        post_id: '98',
        date: 'May 16, 2010',
    },
    {
        category: 'general',
        medium: 'bitcointalk',
        text:
            "The price of .com registrations is lower than it should be, therefore any good name you might think of is always already taken by some domain name speculator.  Fortunately, it's standard for open source projects to be .org.",
        post_id: '94',
        date: 'March 23, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            'How does everyone feel about the B symbol with the two lines through the outside?  Can we live with that as our logo?',
        post_id: '83',
        date: 'February 26, 2010',
    },
    {
        category: 'transactions',
        medium: 'bitcointalk',
        text:
            'That would be nice at point-of-sale.  The cash register displays a QR-code encoding a bitcoin address and amount on a screen and you photo it with your mobile.',
        post_id: '73',
        date: 'February 24, 2010',
    },
    {
        category: 'economics',
        medium: 'bitcointalk',
        text:
            'A rational market price for something that is expected to increase in value will already reflect the present value of the expected future increases.  In your head, you do a probability estimate balancing the odds that it keeps increasing.',
        post_id: '65',
        date: 'February 21, 2010',
    },
    {
        category: 'economics, bitcoin-economics',
        medium: 'bitcointalk',
        text:
            'The price of any commodity tends to gravitate toward the production cost.  If the price is below cost, then production slows down.  If the price is above cost, profit can be made by generating and selling more.  At the same time, the increased production would increase the difficulty, pushing the cost of generating towards the price.',
        post_id: '65',
        date: 'February 21, 2010',
    },
    {
        category: 'bitcoin-economics',
        medium: 'bitcointalk',
        text:
            'At the moment, generation effort is rapidly increasing, suggesting people are estimating the present value to be higher than the current cost of production.',
        post_id: '65',
        date: 'February 21, 2010',
    },
    {
        category: 'bitcoin-economics',
        medium: 'bitcointalk',
        text:
            "I'm sure that in 20 years there will either be very large transaction volume or no volume.",
        post_id: '57',
        date: 'February 14, 2010',
    },
    {
        category: 'bitcoin-economics, fees',
        medium: 'bitcointalk',
        text:
            'In a few decades when the reward gets too small, the transaction fee will become the main compensation for nodes.',
        post_id: '57',
        date: 'February 14, 2010',
    },
    {
        category: 'nodes, mining, fees',
        medium: 'bitcointalk',
        text:
            "If you're sad about paying the fee, you could always turn the tables and run a node yourself and maybe someday rake in a 0.44 fee yourself.",
        post_id: '56',
        date: 'February 14, 2010',
    },
    {
        category: 'bitcoin-economics, bitcoin-design',
        medium: 'bitcointalk',
        text:
            "Eventually at most only 21 million coins for 6.8 billion people in the world if it really gets huge.\n\nBut don't worry, there are another 6 decimal places that aren't shown, for a total of 8 decimal places internally.  It shows 1.00 but internally it's 1.00000000.  If there's massive deflation in the future, the software could show more decimal places.",
        post_id: '46',
        date: 'February 6, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            'If it gets tiresome working with small numbers, we could change where the display shows the decimal point.  Same amount of money, just different convention for where the ","\'s and "."\'s go.  e.g. moving the decimal place 3 places would mean if you had 1.00000 before, now it shows it as 1,000.00.',
        post_id: '46',
        date: 'February 6, 2010',
    },
    {
        category: 'privacy',
        medium: 'bitcointalk',
        text:
            "Bitcoin is still very new and has not been independently analysed.  If you're serious about privacy, TOR is an advisable precaution.",
        post_id: '45',
        date: 'February 6, 2010',
    },
    {
        category: 'privacy',
        medium: 'bitcointalk',
        text:
            "You could use TOR if you don't want anyone to know you're even using Bitcoin.",
        post_id: '45',
        date: 'February 6, 2010',
    },
    {
        category: 'bitcoin-design',
        medium: 'bitcointalk',
        text:
            'I very much wanted to find some way to include a short message, but the problem is, the whole world would be able to see the message.  As much as you may keep reminding people that the message is completely non-private, it would be an accident waiting to happen.',
        post_id: '33',
        date: 'January 28, 2010',
    },
    {
        category: 'mining',
        medium: 'bitcointalk',
        text:
            "The average total coins generated across the network per day stays the same.  Faster machines just get a larger share than slower machines.  If everyone bought faster machines, they wouldn't get more coins than before.",
        post_id: '20',
        date: 'December 12, 2009',
    },
    {
        category: 'mining',
        medium: 'bitcointalk',
        text:
            "We should have a gentleman's agreement to postpone the GPU arms race as long as we can for the good of the network.  It's much easer to get new users up to speed if they don't have to worry about GPU drivers and compatibility.  It's nice how anyone with just a CPU can compete fairly equally right now.",
        post_id: '20',
        date: 'December 12, 2009',
    },
    {
        category: 'bitcoin-economics',
        medium: 'bitcointalk',
        text:
            "Those coins can never be recovered, and the total circulation is less.  Since the effective circulation is reduced, all the remaining coins are worth slightly more.  It's the opposite of when a government prints money and the value of existing money goes down.",
        post_id: '17',
        date: 'December 10, 2009',
    },
    {
        category: 'trusted-third-parties',
        text:
            "Being open source means anyone can independently review the code.  If it was closed source, nobody could verify the security.  I think it's essential for a program of this nature to be open source.",
        medium: 'bitcointalk',
        post_id: '17',
        date: 'December 10, 2009',
    },
    {
        category: 'privacy, transactions',
        medium: 'bitcointalk',
        text:
            "For greater privacy, it's best to use bitcoin addresses only once.",
        post_id: '11',
        date: 'November 25, 2009',
    },
    {
        category: 'mining',
        medium: 'bitcointalk',
        text:
            "Think of it as a cooperative effort to make a chain.  When you add a link, you must first find the current end of the chain.  If you were to locate the last link, then go off for an hour and forge your link, come back and link it to the link that was the end an hour ago, others may have added several links since then and they're not going to want to use your link that now branches off the middle.",
        post_id: '8',
        date: 'November 22, 2009',
    },
    {
        category: 'bitcoin-design',
        medium: 'p2pfoundation',
        text:
            'It is a global distributed database, with additions to the database by consent of the majority, based on a set of rules they follow: \n\n- Whenever someone finds proof-of-work to generate a block, they get some new coins\n- The proof-of-work difficulty is adjusted every two weeks to target an average of 6 blocks per hour (for the whole network)\n- The coins given per block is cut in half every 4 years',
        post_id: '3',
        date: 'February 18, 2009',
    },
    {
        category: 'bitcoin-economics',
        medium: 'p2pfoundation',
        text:
            'You could say coins are issued by the majority. They are issued in a limited, predetermined amount.',
        post_id: '3',
        date: 'February 18, 2009',
    },
    {
        category: 'bitcoin-economics',
        medium: 'p2pfoundation',
        text:
            "To Sepp's question, indeed there is nobody to act as central bank or federal reserve to adjust the money supply as the population of users grows. That would have required a trusted party to determine the value, because I don't know a way for software to know the real world value of things.",
        post_id: '3',
        date: 'February 18, 2009',
    },
    {
        category: 'bitcoin-economics',
        medium: 'p2pfoundation',
        text:
            "In this sense, it's more typical of a precious metal. Instead of the supply changing to keep the value the same, the supply is predetermined and the value changes. As the number of users grows, the value per coin increases. It has the potential for a positive feedback loop; as users increase, the value goes up, which could attract more users to take advantage of the increasing value.",
        post_id: '3',
        date: 'February 18, 2009',
    },
    {
        category: 'cryptocurrency',
        medium: 'p2pfoundation',
        text:
            "A lot of people automatically dismiss e-currency as a lost cause because of all the companies that failed since the 1990's. I hope it's obvious it was only the centrally controlled nature of those systems that doomed them. I think this is the first time we're trying a decentralized, non-trust-based system.",
        post_id: '2',
        date: 'February 15, 2009',
    },
    {
        category: 'releases, bitcoin-design',
        medium: 'p2pfoundation',
        text:
            "I've developed a new open source P2P e-cash system called Bitcoin. It's completely decentralized, with no central server or trusted parties, because everything is based on crypto proof instead of trust. Give it a try, or take a look at the screenshots and design paper: \n\nDownload Bitcoin v0.1 at http://www.bitcoin.org",
        post_id: '1',
        date: 'February 11, 2009',
    },
    {
        category: 'economics',
        medium: 'p2pfoundation',
        text:
            "The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust.",
        post_id: '1',
        date: 'February 11, 2009',
    },
    {
        category: 'micropayments, privacy, banks',
        medium: 'p2pfoundation',
        text:
            'Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve. We have to trust them with our privacy, trust them not to let identity thieves drain our accounts. Their massive overhead costs make micropayments impossible.',
        post_id: '1',
        date: 'February 11, 2009',
    },
    {
        category: 'encryption',
        medium: 'p2pfoundation',
        text:
            'A generation ago, multi-user time-sharing computer systems had a similar problem. Before strong encryption, users had to rely on password protection to secure their files, placing trust in the system administrator to keep their information private. Privacy could always be overridden by the admin based on his judgment call weighing the principle of privacy against other concerns, or at the behest of his superiors. Then strong encryption became available to the masses, and trust was no longer required. Data could be secured in a way that was physically impossible for others to access, no matter for what reason, no matter how good the excuse, no matter what.',
        post_id: '1',
        date: 'February 11, 2009',
    },
    {
        category: 'cryptocurrency',
        medium: 'p2pfoundation',
        text:
            'With e-currency based on cryptographic proof, without the need to trust a third party middleman, money can be secure and transactions effortless.',
        post_id: '1',
        date: 'February 11, 2009',
    },
    {
        category: 'transactions',
        medium: 'p2pfoundation',
        text:
            'A digital coin contains the public key of its owner. To transfer it, the owner signs the coin together with the public key of the next owner. Anyone can check the signatures to verify the chain of ownership.',
        post_id: '1',
        date: 'February 11, 2009',
    },
    {
        category: 'double-spending',
        medium: 'p2pfoundation',
        text:
            "Any owner could try to re-spend an already spent coin by signing it again to another owner. The usual solution is for a trusted company with a central database to check for double-spending, but that just gets back to the trust model. In its central position, the company can override the users, and the fees needed to support the company make micropayments impractical. \nBitcoin's solution is to use a peer-to-peer network to check for double-spending. In a nutshell, the network works like a distributed timestamp server, stamping the first transaction to spend a coin. It takes advantage of the nature of information being easy to spread but hard to stifle.",
        post_id: '1',
        date: 'February 11, 2009',
    },
    {
        category: 'bitcoin-design',
        medium: 'p2pfoundation',
        text:
            'The result is a distributed system with no single point of failure. Users hold the crypto keys to their own money and transact directly with each other, with the help of the P2P network to check for double-spending.',
        post_id: '1',
        date: 'February 11, 2009',
    },
    {
        category: 'identity',
        medium: 'p2pfoundation',
        text: 'I am not Dorian Nakamoto.',
        post_id: '4',
        date: 'March 7, 2014',
    },
    {
        category: 'bitcoin-design',
        medium: 'email',
        email_id: '1',
        text:
            "I've been working on a new electronic cash system that's fully peer-to-peer, with no trusted third party.",
        date: 'November 1, 2008',
    },
    {
        category: 'bitcoin-design',
        medium: 'email',
        email_id: '1',
        text:
            'The main properties: \n Double-spending is prevented with a peer-to-peer network.\n No mint or other trusted parties.\n Participants can be anonymous.\n New coins are made from Hashcash style proof-of-work.\n The proof-of-work for new coin generation also proof-of-workers the network to prevent double-spending.',
        date: 'November 1, 2008',
    },
    {
        category: 'double-spending',
        medium: 'email',
        email_id: '2',
        text:
            'Long before the network gets anywhere near as large as that, it would be safe for users to use Simplified Payment Verification (section 8) to check for double spending, which only requires having the chain of block headers, or about 12KB per day.',
        date: 'November 2, 2008',
    },
    {
        category: 'nodes',
        medium: 'email',
        email_id: '2',
        text:
            'Only people trying to create new coins would need to run network nodes.',
        date: 'November 2, 2008',
    },
    {
        category: 'nodes',
        medium: 'email',
        email_id: '2',
        text:
            'At first, most users would run network nodes, but as the network grows beyond a certain point, it would be left more and more to specialists with server farms of specialized hardware. A server farm would only need to have one node on the network and the rest of the LAN connects with that one node.',
        date: 'November 2, 2008',
    },
    {
        category: 'mining',
        medium: 'email',
        email_id: '3',
        text:
            'The requirement is that the good guys collectively have more CPU proof-of-worker than any single attacker.',
        date: 'November 3, 2008',
    },
    {
        category: 'mining',
        medium: 'email',
        email_id: '3',
        text:
            'There would be many smaller zombie farms that are not big enough to overproof-of-worker the network, and they could still make money by generating bitcoins. The smaller farms are then the "honest nodes". (I need a better term than "honest") The more smaller farms resort to generating bitcoins, the higher the bar gets to overproof-of-worker the network, making larger farms also too small to overproof-of-worker it so that they may as well generate bitcoins too. According to the "long tail" theory, the small, medium and merely large farms put together should add up to a lot more than the biggest zombie farm.',
        date: 'November 3, 2008',
    },
    {
        category: 'mining',
        medium: 'email',
        email_id: '3',
        text:
            "Even if a bad guy does overproof-of-worker the network, it's not like he's instantly rich. All he can accomplish is to take back money he himself spent, like bouncing a check. To exploit it, he would have to buy something from a merchant, wait till it ships, then overproof-of-worker the network and try to take his money back. I don't think he could make as much money trying to pull a carding scheme like that as he could by generating bitcoins. With a zombie farm that big, he could generate more bitcoins than everyone else combined.",
        date: 'November 3, 2008',
    },
    {
        category: 'mining',
        medium: 'email',
        email_id: '3',
        text:
            'The Bitcoin network might actually reduce spam by diverting zombie farms to generating bitcoins instead.',
        date: 'November 3, 2008',
    },
    {
        category: 'motives',
        medium: 'email',
        email_id: '4',
        text:
            'Yes, but we can win a major battle in the arms race and gain a new territory of freedom for several years.',
        date: 'November 7, 2008',
    },
    {
        category: 'p2p-networks, government',
        medium: 'email',
        email_id: '4',
        text:
            'Governments are good at cutting off the heads of a centrally controlled networks like Napster, but pure P2P networks like Gnutella and Tor seem to be holding their own.',
        date: 'November 7, 2008',
    },
    {
        category: 'mining, difficulty',
        medium: 'email',
        email_id: '5',
        text:
            'As computers get faster and the total computing proof-of-worker applied to creating bitcoins increases, the difficulty increases proportionally to keep the total new production constant. Thus, it is known in advance how many new bitcoins will be created every year in the future.',
        date: 'November 8, 2008',
    },
    {
        category: 'bitcoin-economics',
        medium: 'email',
        email_id: '5',
        text:
            'The fact that new coins are produced means the money supply increases by a planned amount, but this does not necessarily result in inflation. If the supply of money increases at the same rate that the number of people using it increases, prices remain stable. If it does not increase as fast as demand, there will be deflation and early holders of money will see its value increase. Coins have to get initially distributed somehow, and a constant rate seems like the best formula.',
        date: 'November 8, 2008',
    },
    {
        category: 'nodes',
        medium: 'email',
        email_id: '6',
        text:
            'Right, nodes keep transactions in their working set until they get into a block. If a transaction reaches 90% of nodes, then each time a new block is found, it has a 90% chance of being in it.',
        date: 'November 9, 2008',
    },
    {
        category: 'transactions',
        medium: 'email',
        email_id: '6',
        text:
            'Receivers of transactions will normally need to hold transactions for perhaps an hour or more to allow time for this kind of possibility to be resolved. They can still re-spend the coins immediately, but they should wait before taking an action such as shipping goods.',
        date: 'November 9, 2008',
    },
    {
        category: 'double-spending',
        medium: 'email',
        email_id: '6',
        text:
            "The attacker isn't adding blocks to the end. He has to go back and redo the block his transaction is in and all the blocks after it, as well as any new blocks the network keeps adding to the end while he's doing that. He's rewriting history. Once his branch is longer, it becomes the new valid one.",
        date: 'November 9, 2008',
    },
    {
        category: 'nodes, mining, proof-of-work',
        medium: 'email',
        email_id: '6',
        text:
            "It is strictly necessary that the longest chain is always considered the valid one. Nodes that were present may remember that one branch was there first and got replaced by another, but there would be no way for them to convince those who were not present of this. We can't have subfactions of nodes that cling to one branch that they think was first, others that saw another branch first, and others that joined later and never saw what happened. The CPU proof-of-worker proof-of-work vote must have the final say. The only way for everyone to stay on the same page is to believe that the longest chain is always the valid one, no matter what.",
        date: 'November 9, 2008',
    },
    {
        category: 'transactions',
        medium: 'email',
        email_id: '6',
        text:
            'The recipient just needs to verify it back to a depth that is sufficiently far back in the block chain, which will often only require a depth of 2 transactions. All transactions before that can be discarded.',
        date: 'November 9, 2008',
    },
    {
        category: 'nodes',
        medium: 'email',
        email_id: '6',
        text:
            'When a node receives a block, it checks the signatures of every transaction in it against previous transactions in blocks. Blocks can only contain transactions that depend on valid transactions in previous blocks or the same block. Transaction C could depend on transaction B in the same block and B depends on transaction A in an earlier block.',
        date: 'November 9, 2008',
    },
    {
        category: 'transactions',
        medium: 'email',
        email_id: '7',
        text:
            "It's not a problem if transactions have to wait one or a few extra cycles to get into a block.",
        date: 'November 9, 2008',
    },
    {
        category: 'proof-of-work',
        medium: 'email',
        email_id: '8',
        text:
            'The proof-of-work chain is the solution to the synchronisation problem, and to knowing what the globally shared view is without having to trust anyone.',
        date: 'November 9, 2008',
    },
    {
        category: 'nodes',
        medium: 'email',
        email_id: '8',
        text:
            "A transaction will quickly propagate throughout the network, so if two versions of the same transaction were reported at close to the same time, the one with the head start would have a big advantage in reaching many more nodes first. Nodes will only accept the first one they see, refusing the second one to arrive, so the earlier transaction would have many more nodes working on incorporating it into the next proof-of-work. In effect, each node votes for its viewpoint of which transaction it saw first by including it in its proof-of-work effort. If the transactions did come at exactly the same time and there was an even split, it's a toss up based on which gets into a proof-of-work first, and that decides which is valid.",
        date: 'November 9, 2008',
    },
    {
        category: 'nodes, proof-of-work',
        medium: 'email',
        email_id: '8',
        text:
            "When a node finds a proof-of-work, the new block is propagated throughout the network and everyone adds it to the chain and starts working on the next block after it. Any nodes that had the other transaction will stop trying to include it in a block, since it's now invalid according to the accepted chain.",
        date: 'November 9, 2008',
    },
    {
        category: 'proof-of-work',
        medium: 'email',
        email_id: '8',
        text:
            "The proof-of-work chain is itself self-evident proof that it came from the globally shared view. Only the majority of the network together has enough CPU proof-of-worker to generate such a difficult chain of proof-of-work. Any user, upon receiving the proof-of-work chain, can see what the majority of the network has approved. Once a transaction is hashed into a link that's a few links back in the chain, it is firmly etched into the global history.",
        date: 'November 9, 2008',
    },
    {
        category: 'fees, bitcoin-economics',
        medium: 'email',
        email_id: '9',
        text:
            "If you're having trouble with the inflation issue, it's easy to tweak it for transaction fees instead. It's as simple as this: let the output value from any transaction be 1 cent less than the input value. Either the client software automatically writes transactions for 1 cent more than the intended payment value, or it could come out of the payee's side. The incentive value when a node finds a proof-of-work for a block could be the total of the fees in the block.",
        date: 'November 10, 2008',
    },
    {
        category: 'double-spending',
        medium: 'email',
        email_id: '10',
        text:
            'When there are multiple double-spent versions of the same transaction, one and only one will become valid.',
        date: 'November 11, 2008',
    },
    {
        category: 'double-spending',
        medium: 'email',
        email_id: '10',
        text:
            "The receiver of a payment must wait an hour or so before believing that it's valid. The network will resolve any possible double-spend races by then.",
        date: 'November 11, 2008',
    },
    {
        category: 'double-spending',
        medium: 'email',
        email_id: '10',
        text:
            'The guy who received the double-spend that became invalid never thought he had it in the first place. His software would have shown the transaction go from "unconfirmed" to "invalid". If necessary, the UI can be made to hide transactions until they\'re sufficiently deep in the block chain.',
        date: 'November 11, 2008',
    },
    {
        category: 'difficulty',
        medium: 'email',
        email_id: '10',
        text:
            "The target time between blocks will probably be 10 minutes. Every block includes its creation time. If the time is off by more than 36 hours, other nodes won't work on it. If the timespan over the last 6*24*30 blocks is less than 15 days, blocks are being generated too fast and the proof-of-work difficulty doubles. Everyone does the same calculation with the same chain data, so they all get the same result at the same link in the chain.",
        date: 'November 11, 2008',
    },
    {
        category: 'transactions',
        medium: 'email',
        email_id: '10',
        text:
            "Instantant non-repudiability is not a feature, but it's still much faster than existing systems. Paper cheques can bounce up to a week or two later. Credit card transactions can be contested up to 60 to 180 days later. Bitcoin transactions can be sufficiently irreversible in an hour or two.",
        date: 'November 11, 2008',
    },
    {
        category: 'nodes',
        medium: 'email',
        email_id: '10',
        text:
            'With the transaction fee based incentive system I recently posted, nodes would have an incentive to include all the paying transactions they receive.',
        date: 'November 11, 2008',
    },
    {
        category: 'proof-of-work',
        medium: 'email',
        email_id: '11',
        text:
            "The proof-of-work chain is a solution to the Byzantine Generals' Problem. I'll try to rephrase it in that context.\nA number of Byzantine Generals each have a computer and want to attack the King's wi-fi by brute forcing the password, which they've learned is a certain number of characters in length. Once they stimulate the network to generate a packet, they must crack the password within a limited time to break in and erase the logs, otherwise they will be discovered and get in trouble. They only have enough CPU proof-of-worker to crack it fast enough if a majority of them attack at the same time. \n They don't particularly care when the attack will be, just that they all agree. It has been decided that anyone who feels like it will announce a time, and whatever time is heard first will be the official attack time. The problem is that the network is not instantaneous, and if two generals announce different attack times at close to the same time, some may hear one first and others hear the other first. They use a proof-of-work chain to solve the problem. Once each general receives whatever attack time he hears first, he sets his computer to solve an extremely difficult proof-of-work problem that includes the attack time in its hash. The proof-of-work is so difficult, it's expected to take 10 minutes of them all working at once before one of them finds a solution. Once one of the generals finds a proof-of-work, he broadcasts it to the network, and everyone changes their current proof-of-work computation to include that proof-of-work in the hash they're working on. If anyone was working on a different attack time, they switch to this one, because its proof-of-work chain is now longer.\n After two hours, one attack time should be hashed by a chain of 12 proofs-of-work. Every general, just by verifying the difficulty of the proof-of-work chain, can estimate how much parallel CPU proof-of-worker per hour was expended on it and see that it must have required the majority of the computers to produce that much proof-of-work in the allotted time. They had to all have seen it because the proof-of-work is proof that they worked on it. If the CPU proof-of-worker exhibited by the proof-of-work chain is sufficient to crack the password, they can safely attack at the agreed time.\n The proof-of-work chain is how all the synchronisation, distributed database and global view problems you've asked about are solved.",
        date: 'November 13, 2008',
    },
    {
        category: 'nodes, mining',
        medium: 'email',
        email_id: '12',
        text:
            'Broadcasts will probably be almost completely reliable. TCP transmissions are rarely ever dropped these days, and the broadcast protocol has a retry mechanism to get the data from other nodes after a while. If broadcasts turn out to be slower in practice than expected, the target time between blocks may have to be increased to avoid wasting resources. We want blocks to usually propagate in much less time than it takes to generate them, otherwise nodes would spend too much time working on obsolete blocks.',
        date: 'November 14, 2008',
    },
    {
        category: 'motives',
        medium: 'email',
        email_id: '12',
        text:
            "It's very attractive to the libertarian viewpoint if we can explain it properly. I'm better with code than with words though.",
        date: 'November 13, 2008',
    },
    {
        category: 'releases',
        medium: 'email',
        email_id: '13',
        text:
            "I'll try and hurry up and release the sourcecode as soon as possible to serve as a reference to help clear up all these implementation questions.",
        date: 'November 17, 2008',
    },
    {
        category: 'transactions',
        medium: 'email',
        email_id: '13',
        text:
            'A basic transaction is just what you see in the figure in section 2. A signature (of the buyer) satisfying the public key of the previous transaction, and a new public key (of the seller) that must be satisfied to spend it the next time.',
        date: 'November 17, 2008',
    },
    {
        category: 'double-spending',
        medium: 'email',
        email_id: '13',
        text:
            "There's no need for reporting of \"proof of double spending\" like that. If the same chain contains both spends, then the block is invalid and rejected. \n Same if a block didn't have enough proof-of-work. That block is invalid and rejected. There's no need to circulate a report about it. Every node could see that and reject it before relaying it.",
        date: 'November 17, 2008',
    },
    {
        category: 'double-spending',
        medium: 'email',
        email_id: '13',
        text:
            'We\'re not "on the lookout" for double spends to sound the alarm and catch the cheater. We merely adjudicate which one of the spends is valid. Receivers of transactions must wait a few blocks to make sure that resolution has had time to complete. Would be cheaters can try and simultaneously double-spend all they want, and all they accomplish is that within a few blocks, one of the spends becomes valid and the others become invalid. Any later double-spends are immediately rejected once there\'s already a spend in the main chain.',
        date: 'November 17, 2008',
    },
    {
        category: 'proof-of-work, mining',
        medium: 'email',
        email_id: '13',
        text:
            "The proof-of-work is a Hashcash style SHA-256 collision finding. It's a memoryless process where you do millions of hashes a second, with a small chance of finding one each time. The 3 or 4 fastest nodes' dominance would only be proportional to their share of the total CPU proof-of-worker. Anyone's chance of finding a solution at any time is proportional to their CPU proof-of-worker.",
        date: 'November 17, 2008',
    },
    {
        category: 'bitcoin-economics',
        medium: 'email',
        email_id: '13',
        text:
            'There will be transaction fees, so nodes will have an incentive to receive and include all the transactions they can. Nodes will eventually be compensated by transaction fees alone when the total coins created hits the pre-determined ceiling.',
        date: 'November 17, 2008',
    },
    {
        category: 'proof-of-work',
        medium: 'email',
        email_id: '14',
        text:
            'The credential that establishes someone as real is the ability to supply CPU proof-of-worker.',
        date: 'November 17, 2008',
    },
    {
        category: 'double-spending',
        medium: 'email',
        email_id: '14',
        text:
            "The race is to spread your transaction on the network first. Think 6 degrees of freedom -- it spreads exponentially. It would only take something like 2 minutes for a transaction to spread widely enough that a competitor starting late would have little chance of grabbing very many nodes before the first one is overtaking the whole network. During those 2 minutes, the merchant's nodes can be watching for a double-spent transaction. The double-spender would not be able to blast his alternate transaction out to the world without the merchant getting it, so he has to wait before starting. \n If the real transaction reaches 90% and the double-spent tx reaches 10%, the double-spender only gets a 10% chance of not paying, and 90% chance his money gets spent. For almost any type of goods, that's not going to be worth it for the scammer.",
        date: 'November 17, 2008',
    },
    {
        category: 'transactions',
        medium: 'email',
        email_id: '14',
        text:
            "If a merchant actually has a problem with theft, they can make the customer wait 2 minutes, or wait for something in e-mail, which many already do. If they really want to optimize, and it's a large download, they could cancel the download in the middle if the transaction comes back double-spent. If it's website access, typically it wouldn't be a big deal to let the customer have access for 5 minutes and then cut off access if it's rejected. Many such sites have a free trial anyway.",
        date: 'November 17, 2008',
    },
    {
        category: 'releases, bitcoin-design',
        medium: 'email',
        email_id: '15',
        text:
            "I believe I've worked through all those little details over the last year and a half while coding it, and there were a lot of them. The functional details are not covered in the paper, but the sourcecode is coming soon. I sent you the main files. (available by request at the moment, full release soon)",
        date: 'November 17, 2008',
    },
    {
        category: 'releases',
        medium: 'email',
        email_id: '16',
        text:
            "Announcing the first release of Bitcoin, a new electronic cash system that uses a peer-to-peer network to prevent double-spending. It's completely decentralized with no server or central authority.",
        date: 'January 9, 2009',
    },
    {
        category: 'nodes',
        medium: 'email',
        email_id: '16',
        text:
            "If you can keep a node running that accepts incoming connections, you'll really be helping the network a lot. Port 8333 on your firewall needs to be open to receive incoming connections.",
        date: 'January 9, 2009',
    },
    {
        category: 'mining',
        medium: 'email',
        email_id: '16',
        text:
            "You can get coins by getting someone to send you some, or turn on Options->Generate Coins to run a node and generate blocks. I made the proof-of-work difficulty ridiculously easy to start with, so for a little while in the beginning a typical PC will be able to generate coins in just a few hours. It'll get a lot harder when competition makes the automatic adjustment drive up the difficulty. Generated coins must wait 120 blocks to mature before they can be spent.",
        date: 'January 9, 2009',
    },
    {
        category: 'transactions',
        medium: 'email',
        email_id: '16',
        text:
            "There are two ways to send money. If the recipient is online, you can enter their IP address and it will connect, get a new public key and send the transaction with comments. If the recipient is not online, it is possible to send to their Bitcoin address, which is a hash of their public key that they give you. They'll receive the transaction the next time they connect and get the block it's in. This method has the disadvantage that no comment information is sent, and a bit of privacy may be lost if the address is used multiple times, but it is a useful alternative if both users can't be online at the same time or the recipient can't receive incoming connections.",
        date: 'January 9, 2009',
    },
    {
        category: 'bitcoin-economics',
        medium: 'email',
        email_id: '16',
        text:
            "Total circulation will be 21,000,000 coins. It'll be distributed to network nodes when they make blocks, with the amount cut in half every 4 years.\n\nfirst 4 years: 10,500,000 coins\nnext 4 years: 5,250,000 coins\nnext 4 years: 2,625,000 coins\nnext 4 years: 1,312,500 coins\netc...\n\nWhen that runs out, the system can support transaction fees if needed. It's based on open market competition, and there will probably always be nodes willing to process transactions for free.",
        date: 'January 9, 2009',
    },
    {
        category: 'cryptocurrency',
        medium: 'email',
        email_id: '17',
        text:
            "I would be surprised if 10 years from now we're not using electronic currency in some way, now that we know a way to do it that won't inevitably get dumbed down when the trusted third party gets cold feet.",
        date: 'January 17, 2009',
    },
    {
        category: 'micropayments',
        medium: 'email',
        email_id: '17',
        text:
            'It can already be used for pay-to-send e-mail. The send dialog is resizeable and you can enter as long of a message as you like. It\'s sent directly when it connects. The recipient doubleclicks on the transaction to see the full message. If someone famous is getting more e-mail than they can read, but would still like to have a way for fans to contact them, they could set up Bitcoin and give out the IP address on their website. "Send X bitcoins to my priority hotline at this IP and I\'ll read the message personally."',
        date: 'January 17, 2009',
    },
    {
        category: 'micropayments',
        medium: 'email',
        email_id: '17',
        text:
            "Subscription sites that need some extra proof-of-work for their free trial so it doesn't cannibalize subscriptions could charge bitcoins for the trial.",
        date: 'January 17, 2009',
    },
    {
        category: 'micropayments, bitcoin-economics',
        medium: 'email',
        email_id: '17',
        text:
            'It might make sense just to get some in case it catches on. If enough people think the same way, that becomes a self fulfilling prophecy. Once it gets bootstrapped, there are so many applications if you could effortlessly pay a few cents to a website as easily as dropping coins in a vending machine.',
        date: 'January 17, 2009',
    },
    {
        category: 'cryptocurrency',
        text:
            'A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'proof-of-work, double-spending',
        text:
            "We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU proof-of-worker. As long as a majority of CPU proof-of-worker is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'trusted-third-parties',
        text:
            'Commerce on the Internet has come to rely almost exclusively on financial institutions serving as trusted third parties to process electronic payments. While the system works well enough for most transactions, it still suffers from the inherent weaknesses of the trust based model.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'trusted-third-parties',
        text:
            'Completely non-reversible transactions are not really possible, since financial institutions cannot avoid mediating disputes. The cost of mediation increases transaction costs, limiting the minimum practical transaction size and cutting off the possibility for small casual transactions, and there is a broader cost in the loss of ability to make non-reversible payments for non-reversible services. With the possibility of reversal, the need for trust spreads.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'trusted-third-parties, cryptocurrency',
        text:
            'What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party. Transactions that are computationally impractical to reverse would protect sellers from fraud, and routine escrow mechanisms could easily be implemented to protect buyers.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'double-spending, proof-of-work',
        text:
            'In this paper, we propose a solution to the double-spending problem using a peer-to-peer distributed timestamp server to generate computational proof of the chronological order of transactions. The system is secure as long as honest nodes collectively control more CPU proof-of-worker than any cooperating group of attacker nodes.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'transactions',
        text:
            'We define an electronic coin as a chain of digital signatures. Each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these to the end of the coin. A payee can verify the signatures to verify the chain of ownership.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'economics, double-spending',
        text:
            "The problem of course is the payee can't verify that one of the owners did not double-spend the coin. A common solution is to introduce a trusted central authority, or mint, that checks every transaction for double spending. After each transaction, the coin must be returned to the mint to issue a new coin, and only coins issued directly from the mint are trusted not to be double-spent. The problem with this solution is that the fate of the entire money system depends on the company running the mint, with every transaction having to go through them, just like a bank.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'nodes, cryptocurrency, transactions',
        text:
            "We need a way for the payee to know that the previous owners did not sign any earlier transactions. For our purposes, the earliest transaction is the one that counts, so we don't care about later attempts to double-spend. The only way to confirm the absence of a transaction is to be aware of all transactions. In the mint based model, the mint was aware of all transactions and decided which arrived first. To accomplish this without a trusted party, transactions must be publicly announced, and we need a system for participants to agree on a single history of the order in which they were received. The payee needs proof that at the time of each transaction, the majority of nodes agreed it was the first received.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'transactions',
        text:
            'The solution we propose begins with a timestamp server. A timestamp server works by taking a hash of a block of items to be timestamped and widely publishing the hash, such as in a newspaper or Usenet post. The timestamp proves that the data must have existed at the time, obviously, in order to get into the hash. Each timestamp includes the previous timestamp in its hash, forming a chain, with each additional timestamp reinforcing the ones before it.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'proof-of-work',
        text:
            "To implement a distributed timestamp server on a peer-to-peer basis, we will need to use a proof-of-work system similar to Adam Back's Hashcash, rather than newspaper or Usenet posts. The proof-of-work involves scanning for a value that when hashed, such as with SHA-256, the hash begins with a number of zero bits. The average work required is exponential in the number of zero bits required and can be verified by executing a single hash.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'proof-of-work',
        text:
            "For our timestamp network, we implement the proof-of-work by incrementing a nonce in the block until a value is found that gives the block's hash the required zero bits. Once the CPU effort has been expended to make it satisfy the proof-of-work, the block cannot be changed without redoing the work. As later blocks are chained after it, the work to change the block would include redoing all the blocks after it.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'proof-of-work',
        text:
            'The proof-of-work also solves the problem of determining representation in majority decision making. If the majority were based on one-IP-address-one-vote, it could be subverted by anyone able to allocate many IPs. Proof-of-work is essentially one-CPU-one-vote. The majority decision is represented by the longest chain, which has the greatest proof-of-work effort invested in it. If a majority of CPU proof-of-worker is controlled by honest nodes, the honest chain will grow the fastest and outpace any competing chains. To modify a past block, an attacker would have to redo the proof-of-work of the block and all blocks after it and then catch up with and surpass the work of the honest nodes. We will show later that the probability of a slower attacker catching up diminishes exponentially as subsequent blocks are added.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'proof-of-work, difficulty',
        text:
            "To compensate for increasing hardware speed and varying interest in running nodes over time, the proof-of-work difficulty is determined by a moving average targeting an average number of blocks per hour. If they're generated too fast, the difficulty increases.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'bitcoin-design, nodes, proof-of-work',
        text:
            'The steps to run the network are as follows:\n\n1. New transactions are broadcast to all nodes.\n2. Each node collects new transactions into a block.\n3. Each node works on finding a difficult proof-of-work for its block.\n4. When a node finds a proof-of-work, it broadcasts the block to all nodes.\n5. Nodes accept the block only if all transactions in it are valid and not already spent.\n6. Nodes express their acceptance of the block by working on creating the next block in the chain, using the hash of the accepted block as the previous hash.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'nodes, proof-of-work',
        text:
            'Nodes always consider the longest chain to be the correct one and will keep working on extending it. If two nodes broadcast different versions of the next block simultaneously, some nodes may receive one or the other first. In that case, they work on the first one they received, but save the other branch in case it becomes longer. The tie will be broken when the next proof-of-work is found and one branch becomes longer; the nodes that were working on the other branch will then switch to the longer one.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'transactions',
        text:
            'New transaction broadcasts do not necessarily need to reach all nodes. As long as they reach many nodes, they will get into a block before long. Block broadcasts are also tolerant of dropped messages. If a node does not receive a block, it will request it when it receives the next block and realizes it missed one.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'mining, bitcoin-economics',
        text:
            'By convention, the first transaction in a block is a special transaction that starts a new coin owned by the creator of the block. This adds an incentive for nodes to support the network, and provides a way to initially distribute coins into circulation, since there is no central authority to issue them. The steady addition of a constant of amount of new coins is analogous to gold miners expending resources to add gold to circulation. In our case, it is CPU time and electricity that is expended.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'fees, bitcoin-economics',
        text:
            'The incentive can also be funded with transaction fees. If the output value of a transaction is less than its input value, the difference is a transaction fee that is added to the incentive value of the block containing the transaction. Once a predetermined number of coins have entered circulation, the incentive can transition entirely to transaction fees and be completely inflation free.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'mining, bitcoin-economics',
        text:
            'The incentive may help encourage nodes to stay honest. If a greedy attacker is able to assemble more CPU proof-of-worker than all the honest nodes, he would have to choose between using it to defraud people by stealing back his payments, or using it to generate new coins. He ought to find it more profitable to play by the rules, such rules that favour him with more new coins than everyone else combined, than to undermine the system and the validity of his own wealth.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'bitcoin-design',
        text:
            "Once the latest transaction in a coin is buried under enough blocks, the spent transactions before it can be discarded to save disk space. To facilitate this without breaking the block's hash, transactions are hashed in a Merkle Tree, with only the root included in the block's hash. Old blocks can then be compacted by stubbing off branches of the tree. The interior hashes do not need to be stored.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'bitcoin-design',
        text:
            "A block header with no transactions would be about 80 bytes. If we suppose blocks are generated every 10 minutes, 80 bytes * 6 * 24 * 365 = 4.2MB per year. With computer systems typically selling with 2GB of RAM as of 2008, and Moore's Law predicting current growth of 1.2GB per year, storage should not be a problem even if the block headers must be kept in memory.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'bitcoin-design, nodes',
        text:
            "It is possible to verify payments without running a full network node. A user only needs to keep a copy of the block headers of the longest proof-of-work chain, which he can get by querying network nodes until he's convinced he has the longest chain, and obtain the Merkle branch linking the transaction to the block it's timestamped in. He can't check the transaction for himself, but by linking it to a place in the chain, he can see that a network node has accepted it, and blocks added after it further confirm the network has accepted it. \nAs such, the verification is reliable as long as honest nodes control the network, but is more vulnerable if the network is overproof-of-workered by an attacker. While network nodes can verify transactions for themselves, the simplified method can be fooled by an attacker's fabricated transactions for as long as the attacker can continue to overproof-of-worker the network. One strategy to protect against this would be to accept alerts from network nodes when they detect an invalid block, prompting the user's software to download the full block and alerted transactions to confirm the inconsistency. Businesses that receive frequent payments will probably still want to run their own nodes for more independent security and quicker verification.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'transactions, bitcoin-design',
        text:
            'Although it would be possible to handle coins individually, it would be unwieldy to make a separate transaction for every cent in a transfer. To allow value to be split and combined, transactions contain multiple inputs and outputs. Normally there will be either a single input from a larger previous transaction or multiple inputs combining smaller amounts, and at most two outputs: one for the payment, and one returning the change, if any, back to the sender.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'transactions',
        text:
            "It should be noted that fan-out, where a transaction depends on several transactions, and those transactions depend on many more, is not a problem here. There is never the need to extract a complete standalone copy of a transaction's history.",
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'transactions, privacy, trusted-third-parties',
        text:
            'The traditional banking model achieves a level of privacy by limiting access to information to the parties involved and the trusted third party. The necessity to announce all transactions publicly precludes this method, but privacy can still be maintained by breaking the flow of information in another place: by keeping public keys anonymous. The public can see that someone is sending an amount to someone else, but without information linking the transaction to anyone. This is similar to the level of information released by stock exchanges, where the time and size of individual trades, the "tape", is made public, but without telling who the parties were.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'addresses, privacy',
        text:
            'As an additional firewall, a new key pair should be used for each transaction to keep them from being linked to a common owner. Some linking is still unavoidable with multi-input transactions, which necessarily reveal that their inputs were owned by the same owner. The risk is that if the owner of a key is revealed, linking could reveal other transactions that belonged to the same owner.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'mining, proof-of-work',
        text:
            'We consider the scenario of an attacker trying to generate an alternate chain faster than the honest chain. Even if this is accomplished, it does not throw the system open to arbitrary changes, such as creating value out of thin air or taking money that never belonged to the attacker. Nodes are not going to accept an invalid transaction as payment, and honest nodes will never accept a block containing them. An attacker can only try to change one of his own transactions to take back money he recently spent.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'bitcoin-design, trusted-third-parties',
        text:
            'We have proposed a system for electronic transactions without relying on trust. We started with the usual framework of coins made from digital signatures, which provides strong control of ownership, but is incomplete without a way to prevent double-spending. To solve this, we proposed a peer-to-peer network using proof-of-work to record a public history of transactions that quickly becomes computationally impractical for an attacker to change if honest nodes control a majority of CPU proof-of-worker.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
    {
        category: 'nodes, mining',
        text:
            'The network is robust in its unstructured simplicity. Nodes work all at once with little coordination. They do not need to be identified, since messages are not routed to any particular place and only need to be delivered on a best effort basis. Nodes can leave and rejoin the network at will, accepting the proof-of-work chain as proof of what happened while they were gone. They vote with their CPU proof-of-worker, expressing their acceptance of valid blocks by working on extending them and rejecting invalid blocks by refusing to work on them. Any needed rules and incentives can be enforced with this consensus mechanism.',
        medium: 'whitepaper',
        date: 'October 31, 2008',
    },
];
