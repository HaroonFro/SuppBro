


const db = require('../db')
const { protein, creatine, stim, multi } = require('../models')


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


        const stimSupps = [

            {
                brand: 'bucked up',
                product: 'mother bucker',
                caffeine: 300,
                image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw17b5305e/hi-res/2023_03_09/500836_BuckedUp_MotherBucker_Gym%20Junkie_Front.jpg?sw=480&sh=480&sm=fit&yocs=19_1d_'
            },
            {
                brand: 'bucked up',
                product: 'pre-workout bluraz',
                caffeine: 300,
                image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwea116c9c/hi-res/500408_1.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
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
                image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwe3e5b9fb/hi-res/494403_ProSupps%20HYDE%20Nightmare%20Pre-Workout_Blood%20Berry_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
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
                image: 'https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.be/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwf0d30653/hi-res/528058_GHOST_LEGEND_All_Out_Cherry_Limeade_Front.jpg?sw=305&sh=305&sm=fit&yocs=19_1d_'
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


        await protein.insertMany(proteinSupps)
        console.log('created Protein')
        
        await stim.insertMany(stimSupps)
        console.log('created Stim')
          
        await creatine.insertMany(creatineSupps)
        console.log('created Creatine')
        
        await multi.insertMany(multiSupps)
        console.log('created Multi')

}

const run = async () => {
    await main()
    db.close()
}

run()