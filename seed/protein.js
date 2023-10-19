const db = require('../db')
const { Protein } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const proteinSupps = [
        {
            brand: 'amp',
            product: 'wheybolic-rippped',
            protein: 25,
            image: 'https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwe12f9f91/hi-res/Price_Drop_Images_Banner/023457_GNC_AMP_Wheybolic_Ripped_Classic_Vanilla_Tub_PriceDrop.jpg?sw=1500&sh=1500&sm=fit'
        },
        {
            brand: 'amp',
            product: 'wheybolic-alpha',
            protein: 25,
            image: 'https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw32003160/hi-res/Price_Drop_Images_Banner/034573_GNC_AMP_Wheybolic_Alpha_Chocolate_Fudge_Tub_PriceDrop.jpg?sw=1500&sh=1500&sm=fit'
        },
        {
            brand: 'amp',
            product: 'wheybolic',
            protein: 25,
            image: 'https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwc319bb1c/hi-res/Price_Drop_Images_Banner/012345_GNC_AMP_Wheybolic_Chocolate_Fudge_Tub_PriceDrop.jpg?sw=1500&sh=1500&sm=fit'
        },
        {
            brand: 'glaxon',
            product: 'protos-cookies',
            protein: 30,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwdbc7cee9/hi-res/2023_10_09_Price_Drop_Banner_Images/584671_GLAXON_Protos_Whey_CookiesNMilk_Front_PriceDrop.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'  
        },
        {
            brand: 'glaxon',
            product: 'protos-strwbry',
            protein: 30,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw82c6b9bb/hi-res/2023_10_09_Price_Drop_Banner_Images/584672_GLAXON_Protos_Whey_StrawberryMilk_Front_PriceDrop.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'glaxon',
            product: 'protos-isolate',
            protein: 30,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw00db10c4/hi-res/GNC-64624/584732_Glaxon_Protos_Isolate_Salted_Caramel_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'optimum nutrition',
            product: 'gold standard-chocolate',
            protein: 25,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw95d7deeb/hi-res/350258_web_Optimum%20Nutrition%20GSW_5LB_ExtMilkChocolate_Front_.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'optimum nutrition',
            product: 'gold standard-dblchlte',
            protein: 25,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw325553b7/hi-res/350281_web_Optimum%20Nutrition%20GSW_5LB_DRChocolate_Front_.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'optimum nutrition',
            product: 'gold standard-strwbry',
            protein: 25,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwec2ed56e/hi-res/350328_web_Optimum%20Nutrition%20GSW_5LB_StrawberriesCream_Front_.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'ghost',
            product: 'whey-cereal milk',
            protein: 30,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw5bae38f9/hi-res/GHOST_2023_Updates/527911_GHOST_Whey_Protein_Cereal_Milk_Front_2023.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'ghost',
            product: 'whey-pntbtr',
            protein: 30,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw6bec6eb2/hi-res/GHOST_2023_Updates/527922_GHOST_Whey_Protein_Peanut_Butter_Cereal_Front_2023.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'ghost',
            product: 'whey-mlkchclte',
            protein: 30,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw2f00511c/hi-res/GHOST_2023_Updates/527910_GHOST_Whey_Protein_Milk_Chocolate_Front_2023.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        }
    ]
      await Protein.insertMany(proteinSupps)
    console.log('created protein')
}
const run = async () => {
    await main()
    await db.close()
}

run()