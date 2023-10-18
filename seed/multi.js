const db = require('../db')
const { multi } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const multiSupps = [
        {
            brand: 'JYM',
            product: 'vita jym',
            dose: 60,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw4f4e6428/hi-res/2000px%20wide%20JPG/533841_JYM_Vita_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'Olly',
            product: 'multi gummy',
            dose: 30,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw427e356f/hi-res/525804_OLLY_Mens_Multi_Gummies_Blackberry_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'GNC',
            product: 'mega men',
            dose: 120,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw59c45e08/hi-res/Vitapak_Nugenix_bundle_1500x1500.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'GNC',
            product: 'one a day',
            dose: 60,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw7b26b481/hi-res/758901_GNC_MegaMen_50plus_One_Daily_Multii_wholesale_Bottle.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'GNC',
            product: 'mega men',
            dose: 120,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw6408c811/hi-res/201422_GNC%20Mega%20Men_Box.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'GNC',
            product: 'mega men sport',
            dose: 120,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwa70aeb78/hi-res/201522_Mega_Man_Sport_Multivitamin_180_CT_Carton_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'codeage',
            product: 'mens multi',
            dose: 60,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw59b5b2cb/hi-res/2000px%20wide%20JPG/585099_web_Codeagee_MensMultivitamins_2pk_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'GNC',
            product: 'mega men energy',
            dose: 90,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw8ea337c4/hi-res/201722_GNC_Mega_Men_Energy_&_Metabolism_180ct_Bottle.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'codeage',
            product: 'mens multi',
            dose: 80,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.c0/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw06241088/hi-res/585120_web_CodeAge_MensDailyFormula_Pouch_frontbox.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'nugenix',
            product: 'test multi',
            dose: 100,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7770b534475fab84edf/www.gnc.com/v~4b.bc/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwde9514ce/hi-res/452393_1.jpg?sw=305&sh=305&sm=fit&yocs=8_6_'
        },
        {
            brand: 'optimum nutrition',
            product: 'opti-men',
            dose: 95,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7770b534475fab84edf/www.gnc.com/v~4b.bc/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwdef6a8a4/hi-res/352374_1.jpg?sw=305&sh=305&sm=fit&yocs=8_6_'
        },
        {
            brand: 'GNC',
            product: 'performence multi',
            dose: 100,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7770b534475fab84edf/www.gnc.com/v~4b.bc/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw6cb16518/hi-res/219812_GNC%20Mega%20Men%20Performance%20&%20Vitality%20Vitapak_Box.jpg?sw=305&sh=305&sm=fit&yocs=8_6_'
        }
    ]

    const createdMulti = await multi.iinsertMany(multiSupps)
    console.log('created multi', createdMulti)
}

const run = async () => {
    await main()
    await db.close()
}

run()