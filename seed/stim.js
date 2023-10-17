const db = require('../db')
const { stim } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const stimProducts = [
        {
            brand: 'bucked up',
            product: 'mother bucker',
            caffeine: 300,
            Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw17b5305e/hi-res/2023_03_09/500836_BuckedUp_MotherBucker_Gym%20Junkie_Front.jpg?sw=480&sh=480&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'bucked up',
            product: 'pre-workout bluraz',
            caffeine: 300,
            Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwea116c9c/hi-res/500408_1.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'bucked up',
            product: 'pre-workout blood raz',
            caffeine: 300,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw934c5603/hi-res/500407_1.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'pro supps',
            product: 'hyde-nightmare blood berry',
            caffeine: 450,
            Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwe3e5b9fb/hi-res/494403_ProSupps%20HYDE%20Nightmare%20Pre-Workout_Blood%20Berry_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'pro supps',
            product: 'hyde-nightmare jawbreaker',
            caffeine: 450,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwa3626d96/hi-res/494401_ProSupps%20HYDE%20Nightmare%20Pre-Workout_Jawbreaker_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'pro supps',
            product: 'hyde-nightmare lightning lemon',
            caffeine: 450,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwbf56d6f3/hi-res/494402_ProSupps%20HYDE%20Nightmare%20Pre-Workout_Lightning%20Lemon_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'cellucor',
            product: 'C4 fruitpunch',
            caffeine: 180,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwdc6297d7/hi-res/447861_1.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'cellucor',
            product: 'C4 cherry limeade',
            caffeine: 180,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw17ce73b5/hi-res/447698_1.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'cellucor',
            product: 'C4 blue razz',
            caffeine: 180,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwd9fe450c/hi-res/447814_1.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'ghost',
            product: 'legend cherry limeade',
            caffeine: 200,
            Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwf0d30653/hi-res/528058_GHOST_LEGEND_All_Out_Cherry_Limeade_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'ghost',
            product: 'legend sour patch kids',
            caffeine: 200,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw778e659a/hi-res/527978_web%20Ghost%20Legend%20Sour%20Patch%20Kids_tub_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'ghost',
            product: 'legend blue rspbry',
            caffeine: 200,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwab42eab1/hi-res/527968_web_Ghost%20Legend%20V2%20Blue%20Raspberry_tub_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        }
    ]

    const createdStim = await stim.insertMany(stimProducts)
    console.log('created stim', createdStim)
}

const run = async () => {
    await main()
    await db.close()
}

run()