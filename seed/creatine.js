const db = require('../db')
const { Creatine } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const creatineSupps =[
        {
            brand: 'amp',
            product: 'creatine hcl 180',
            dose: 20,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw1d25b60d/hi-res/2021_12_30_updated/882500_GNC_AMP_Creatine_HCl_189_120ct_Carton.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'PMD',
            product: 'CG5 creatine',
            dose: 10,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw9381901f/hi-res/966992_web_PMD%20CG5%20Creatine%20and%20Glutamine%20Unflavored_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'glaxon',
            product: 'electro creatine',
            dose: 20,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw4feae886/hi-res/584629_GLAXON_Electro_Creatine_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'glaxon',
            product: 'Dr. Creatine',
            dose: 20,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw718015bc/hi-res/584619_web_Glaxon%20Dr%20Creatine_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'PMD',
            product: 'CR5 Creatine',
            dose: 10,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw33bd2c58/hi-res/967055_web_PMD%20CR5%20Creatine_Front_Bottle.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'glaxon',
            product: 'electro creatine grape',
            dose: 20,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwdcf43a02/hi-res/2023_05_31/584737_GLAXON_Electro_Creatine_Pez_Grape_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'con-cret',
            product: 'creatine hcl',
            dose: 20,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw3ef24af2/hi-res/414542_Concrete_Creatine_LemonLime_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'con-cret',
            product: 'creatine hcl rspbry',
            dose: 20,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw4b62c458/hi-res/414521_Concrete_Creatine_Raspberry_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'beyond raw',
            product: 'creatine hcl',
            dose: 10,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw2b281110/hi-res/562300_Beyond%20Raw%20Chemistry%20Labs%20Creatine%20HCl_Tub.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'beyond raw',
            product: 'chem labs creatine',
            dose: 10,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwa1011df0/hi-res/562299_web_Beyond%20Raw%20Chemistry%20Labs%20Creatine%20HCl_Front_Tub.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'muscletech',
            product: 'cell tech',
            dose: 20,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwc1684cc8/hi-res/05_31_reupload/802329_MuscleTech_Cell_Tech_Elite_Cherry_Burst_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        },
        {
            brand: 'con-cret',
            product: 'HCL pnaple',
            dose: 20,
            image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw2a203e71/hi-res/414541_Concrete_Creatine_Pineapple_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
        }
    ]

    await Creatine.insertMany(creatineSupps)
    console.log('created creatine')
}

const run = async () => {
    await main()
    await db.close()
}

run()