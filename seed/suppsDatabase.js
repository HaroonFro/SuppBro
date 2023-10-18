const db = require('../db')
const { protein, creatine, stim, multi } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {


        const proteinSupps = [
            {
                brand: 'amp',
                product: 'wheybolic-rippped',
                protein: 25,
                Image: 'https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwe12f9f91/hi-res/Price_Drop_Images_Banner/023457_GNC_AMP_Wheybolic_Ripped_Classic_Vanilla_Tub_PriceDrop.jpg?sw=1500&sh=1500&sm=fit'
            },
            {
                brand: 'amp',
                product: 'wheybolic-alpha',
                protein: 25,
                Image: 'https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw32003160/hi-res/Price_Drop_Images_Banner/034573_GNC_AMP_Wheybolic_Alpha_Chocolate_Fudge_Tub_PriceDrop.jpg?sw=1500&sh=1500&sm=fit'
            },
            {
                brand: 'amp',
                product: 'wheybolic',
                protein: 25,
                Image: 'https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwc319bb1c/hi-res/Price_Drop_Images_Banner/012345_GNC_AMP_Wheybolic_Chocolate_Fudge_Tub_PriceDrop.jpg?sw=1500&sh=1500&sm=fit'
            },
            {
                brand: 'glaxon',
                product: 'protos-cookies',
                protein: 30,
                Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwdbc7cee9/hi-res/2023_10_09_Price_Drop_Banner_Images/584671_GLAXON_Protos_Whey_CookiesNMilk_Front_PriceDrop.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'  
            },
            {
                brand: 'glaxon',
                product: 'protos-strwbry',
                protein: 30,
                Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw82c6b9bb/hi-res/2023_10_09_Price_Drop_Banner_Images/584672_GLAXON_Protos_Whey_StrawberryMilk_Front_PriceDrop.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
            },
            {
                brand: 'glaxon',
                product: 'protos-isolate',
                protein: 30,
                Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw00db10c4/hi-res/GNC-64624/584732_Glaxon_Protos_Isolate_Salted_Caramel_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
            },
            {
                brand: 'optimum nutrition',
                product: 'gold standard-chocolate',
                protein: 25,
                Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw95d7deeb/hi-res/350258_web_Optimum%20Nutrition%20GSW_5LB_ExtMilkChocolate_Front_.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
            },
            {
                brand: 'optimum nutrition',
                product: 'gold standard-dblchlte',
                protein: 25,
                Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw325553b7/hi-res/350281_web_Optimum%20Nutrition%20GSW_5LB_DRChocolate_Front_.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
            },
            {
                brand: 'optimum nutrition',
                product: 'gold standard-strwbry',
                protein: 25,
                Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwec2ed56e/hi-res/350328_web_Optimum%20Nutrition%20GSW_5LB_StrawberriesCream_Front_.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
            },
            {
                brand: 'ghost',
                product: 'whey-cereal milk',
                protein: 30,
                Image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw5bae38f9/hi-res/GHOST_2023_Updates/527911_GHOST_Whey_Protein_Cereal_Milk_Front_2023.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
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


        const creatineSupps = [

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


        
}