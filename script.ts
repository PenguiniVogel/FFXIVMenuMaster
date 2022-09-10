module Script {

    // enum

    const enum MenuName {
        Parsnip_Salad = 'Parsnip Salad',
        Avocado_Salad = 'Avocado Salad',
        Mixed_Salad = 'Mixed Salad',

        Meat_Stew = 'Meat Stew',
        Veggies_Stew = 'Veggies Stew',

        Sunny_Side_Egg = 'Sunny Side Egg',
        Pretzel = 'Pretzel',

        Mashed_Potatoes = 'Mashed Potatoes',
        Sandwich = 'Sandwich',
        Omelette = 'Omelette',
        Small_Steak = 'Small Steak',
        Fried_Fish_n_Fries = 'Fried Fish n\' Fries',
        Smoked_Raptor_Shank = 'Smoked Raptor Shank',

        Baked_Fish = 'Baked Fish',
        Chicken_Marsala = 'Chicken Marsala',
        Salmon_Fillet = 'Salmon Fillet',
        Steak = 'Steak',
        Filet_Mignon = 'Filet Mignon',

        Orange_Juice = 'Orange Juice',
        Grape_Juice = 'Grape Juice',
        Apple_Juice = 'Apple Juice',
        Pineapple_Juice = 'Pineapple Juice',
        Green_Tea = 'Green Tea',
        Black_Tea = 'Black Tea',

        // Champagne = 'Champagne',
        // Wine = 'Wine',
        // Old_Fashioned = 'Old Fashioned',
        // Margarita = 'Margarita',
        // Cosmopolitan = 'Cosmopolitan',
        // Mojito = 'Mojito',
        // Tequila_Sunrise = 'Tequila Sunrise',
        // Whiskey_Sour = 'Whiskey Sour',
        // Mimosa = 'Mimosa',
        // Sazerac = 'Sazerac',

        Acorn_Cookies = 'Acorn Cookies',
        Ginger_Cookies = 'Ginger Cookies',
        White_Chocolate_Pearls = 'White Chocolate Pearls',
        Dark_Chocolate_Pearls = 'Dark Chocolate Pearls',

        Shaved_Ice = 'Shaved Ice',
        Apple_Cake = 'Apple Cake',
        Strawberry_Cake = 'Strawberry Cake',
        Cheese_Cake = 'Cheese Cake',
        Pineapple_upside_down_Cake = 'Pineapple upside-down Cake',
        Sweet_Pancakes = 'Sweet Pancakes',
        Savory_Pancakes = 'Savory Pancakes'
    }

    const enum MealName {
        /** Parsnip_Salad */
        Parsnip_Salad = 'Parsnip Salad',
        /** Avocado_Salad */
        Alligator_Salad = 'Alligator Salad',
        /** Mixed_Salad */
        Landtrap_Salad = 'Landtrap Salad',

        /** Meat_Stew */
        Mutton_Stew = 'Mutton Stew',
        /** Veggies_Stew */
        Chilled_Popoto_Soup = 'Chilled Popoto Soup',

        /** Sunny_Side_Egg */
        Fried_Egg = 'Fried Egg',
        /** Pretzel */
        Dark_Pretzel = 'Dark Pretzel',

        /** Mashed_Potatoes */
        Mashed_Popotoes = 'Mashed Popotoes',
        /** Sandwich */
        Finger_Sandwich = 'Finger Sandwich',
        /** Omelette */
        Dodo_Omelette = 'Dodo Omelette',
        /** Small_Steak */
        Marmot_Steak = 'Marmot Steak',
        /** Fried_Fish_n_Fries */
        Battered_Fish = 'Battered Fish',
        /** Smoked_Raptor_Shank */
        Smoked_Raptor = 'Smoked Raptor',

        /** Baked_Fish */
        Baked_Sole = 'Baked Sole',
        /** Chicken_Marsala */
        Chicken_and_Mushrooms = 'Chicken and Mushrooms',
        /** Salmon_Fillet */
        Salmon_Meuniere = 'Salmon Meuniere',
        /** Steak */
        Antelope_Steak = 'Antelope Steak',
        /** Filet_Mignon */
        Eft_Steak = 'Eft Steak',

        /** Orange_Juice */
        Orange_Juice = 'Orange Juice',
        /** Grape_Juice */
        Grape_Juice = 'Grape Juice',
        /** Apple_Juice */
        Apple_Juice = 'Apple Juice',
        /** Pineapple_Juice */
        Pineapple_Juice = 'Pineapple Juice',
        /** Green_Tea */
        Chamomile_Tea = 'Chamomile Tea',
        /** Black_Tea */
        Mulled_Tea = 'Mulled Tea',

        /** Champagne */
        /** Wine */
        /** Old_Fashioned */
        /** Margarita */
        /** Cosmopolitan */
        /** Mojito */
        /** Tequila_Sunrise */
        /** Whiskey_Sour */
        /** Mimosa */
        /** Sazerac */

        /** Acorn_Cookies */
        Acorn_Cookie = 'Acorn Cookie',
        /** Ginger_Cookies */
        Ginger_Cookie = 'Ginger Cookie',
        /** White_Chocolate_Pearls */
        Pearl_Chocolate = 'Pearl Chocolate',
        /** Dark_Chocolate_Pearls */
        Bubble_Chocolate = 'Bubble Chocolate',

        /** Shaved_Ice */
        Rolanberry_Shaved_Ice = 'Rolanberry Shaved Ice',
        /** Apple_Cake */
        Apple_Tart = 'Apple Tart',
        /** Strawberry_Cake */
        Blood_Currant_Tart = 'Blood Currant Tart',
        /** Cheese_Cake */
        Cheese_Souffle = 'Cheese Souffle',
        /** Pineapple_upside_down_Cake */
        Pineapple_Ponzecake = 'Pineapple Ponzecake',
        /** Sweet_Pancakes */
        Crumpet = 'Crumpet',
        /** Savory_Pancakes */
        Popoto_Pancakes = 'Popoto Pancakes'
    }

    const enum BaseIngredientName {
        Alpine_Parsnip = 'Alpine Parsnip',
        Olive_Oil = 'Olive Oil',
        La_Noscean_Lettuce = 'La Noscean Lettuce',
        Cieldalaes_Spinach = 'Cieldalaes Spinach',
        Buffalo_Beans = 'Buffalo Beans',
        Mineral_Water = 'Mineral Water',
        Alligator_Pear = 'Alligator Pear',
        Paprika = 'Paprika',
        Table_Salt = 'Table Salt',
        Noble_Grapes = 'Noble Grapes',
        Blue_Cheese = 'Blue Cheese',
        Blue_Landtrap_Leaf = 'Blue Landtrap Leaf',
        Wild_Onion = 'Wild Onion',
        Dzemael_Tomato = 'Dzemael Tomato',
        Coerthan_Carrot = 'Coerthan Carrot',
        Mutton_Loin = 'Mutton Loin',
        Sunset_Wheat_Flour = 'Sunset Wheat Flour',
        Orobon_Liver = 'Orobon Liver',
        Black_Pepper = 'Black Pepper',
        Chicken_Breast = 'Chicken Breast',
        Buffalo_Milk = 'Buffalo Milk',
        La_Noscean_Leek = 'La Noscean Leek',
        Popoto = 'Popoto',
        Smooth_Butter = 'Smooth Butter',
        Highland_Parsley = 'Highland Parsley',
        Puk_Egg = 'Puk Egg',
        Chicken_Egg = 'Chicken Egg',
        Maple_Sap = 'Maple Sap',
        Apkallu_Egg = 'Apkallu Egg',
        Volcanic_Rock_Salt = 'Volcanic Rock Salt',
        Gridanian_Walnut = 'Gridanian Walnut',
        Dodo_Egg = 'Dodo Egg',
        Aldgoat_Milk = 'Aldgoat Milk',
        Ruby_Tomato = 'Ruby Tomato',
        Garlean_Garlic = 'Garlean Garlic',
        Marmot_Meat = 'Marmot Meat',
        Haddock = 'Haddock',
        Raptor_Shank = 'Raptor Shank',
        Sun_Lemon = 'Sun Lemon',
        Black_Sole = 'Black Sole',
        Gil_Bun = 'Gil Bun',
        Bluebell_Salmon = 'Bluebell Salmon',
        Antelope_Shank = 'Antelope Shank',
        Aldgoat_Chuck = 'Aldgoat Chuck',
        Eft_Tail = 'Eft Tail',
        Sour_Red = 'Sour Red',
        Laurel = 'Laurel',
        Faerie_Apple = 'Faerie Apple',
        La_Noscean_Orange = 'La Noscean Orange',
        Mirror_Apple = 'Mirror Apple',
        Prickly_Pineapple = 'Prickly Pineapple',
        Chamomile = 'Chamomile',
        Honey = 'Honey',
        Thanalan_Tea_Leaves = 'Thanalan Tea Leaves',
        Pearl_Ginger = 'Pearl Ginger',
        Cloves = 'Cloves',
        Cinnamon = 'Cinnamon',
        Rye_Flour = 'Rye Flour',
        Iron_Acorn = 'Iron Acorn',
        Effervescent_Water = 'Effervescent Water',
        Rock_Salt = 'Rock Salt',
        Kukuru_Bean = 'Kukuru Bean',
        Rolanberry = 'Rolanberry',
        Blood_Currants = 'Blood Currants',
        Gelatin = 'Gelatin',
        Night_Milk = 'Night Milk',
        Dalamud_Popoto = 'Dalamud Popoto',
        Nutmeg = 'Nutmeg',
        Cottage_Cheese = 'Cottage Cheese'
    }

    /**
     * Craft <- Base
     */
    const enum CraftIngredientName1 {
        Dark_Vinegar = 'Dark Vinegar',
        Chicken_Stock = 'Chicken Stock',
        Sweet_Cream = 'Sweet Cream',
        Maple_Syrup = 'Maple Syrup',
        Walnut_Bread = 'Walnut Bread',
        Tomato_Sauce = 'Tomato Sauce',
        Cider_Vinegar = 'Cider Vinegar',
        Natron = 'Natron',
        Kukuru_Butter = 'Kukuru Butter',
        Kukuru_Powder = 'Kukuru Powder',
        Pie_Dough = 'Pie Dough'
    }

    /**
     * Craft <- Craft <- Base
     */
    const enum CraftIngredientName2 {
        Maple_Sugar = 'Maple Sugar',
        Cream_Cheese = 'Cream Cheese'
    }

    const enum AcquireType {
        Material_Supplier = 'Material Supplier',
        Gathering = 'Gathering',
        Crafting = 'Crafting',
        Fishing = 'Fishing',
        Sahagin_Vendor = 'Sahagin Vendor',
        Kobold_Vendor = 'Kobold Vendor',
        Shop = 'Shop',
        Seals = 'Seals',
        Drop = 'Drop'
    }

    const enum ElementalType {
        Fire = 'Fire',
        Water = 'Water',
        Ice = 'Ice'
    }

    const enum ElementalGrade {
        Shard = 'Shard',
        Crystal = 'Crystal',
        Cluster = 'Cluster'
    }

    // type

    type IngredientName = BaseIngredientName | CraftIngredientName1 | CraftIngredientName2;

    // interface

    interface Ingredient {
        name: IngredientName,
        acquire: AcquireType,
        price: number,
        recipe?: Recipe
    }

    interface InputIngredient extends Ingredient {
        amount: number
    }

    interface Elemental {
        type: ElementalType,
        grade: ElementalGrade,
        amount: number
    }

    interface Recipe {
        output: MealName | IngredientName,
        yield: number,
        elemental: Elemental[],
        ingredients: InputIngredient[]
    }

    interface MenuItem {
        name: MenuName,
        recipe: Recipe
    }

    // maps

    const map_BaseIngredients: {
        [name in BaseIngredientName]: Ingredient
    } = {
        [BaseIngredientName.Alpine_Parsnip]: createBaseIngredient(BaseIngredientName.Alpine_Parsnip, AcquireType.Material_Supplier, 19),
        [BaseIngredientName.Olive_Oil]: createBaseIngredient(BaseIngredientName.Olive_Oil, AcquireType.Sahagin_Vendor, 8),
        [BaseIngredientName.La_Noscean_Lettuce]: createBaseIngredient(BaseIngredientName.La_Noscean_Lettuce, AcquireType.Material_Supplier, 19),
        [BaseIngredientName.Cieldalaes_Spinach]: createBaseIngredient(BaseIngredientName.Cieldalaes_Spinach, AcquireType.Material_Supplier, 19),
        [BaseIngredientName.Buffalo_Beans]: createBaseIngredient(BaseIngredientName.Buffalo_Beans, AcquireType.Material_Supplier, 11),
        [BaseIngredientName.Mineral_Water]: createBaseIngredient(BaseIngredientName.Mineral_Water, AcquireType.Material_Supplier, 4),
        [BaseIngredientName.Alligator_Pear]: createBaseIngredient(BaseIngredientName.Alligator_Pear, AcquireType.Gathering, 0),
        [BaseIngredientName.Paprika]: createBaseIngredient(BaseIngredientName.Paprika, AcquireType.Material_Supplier, 24),
        [BaseIngredientName.Table_Salt]: createBaseIngredient(BaseIngredientName.Table_Salt, AcquireType.Sahagin_Vendor, 2),
        [BaseIngredientName.Noble_Grapes]: createBaseIngredient(BaseIngredientName.Noble_Grapes, AcquireType.Gathering, 0),
        [BaseIngredientName.Blue_Cheese]: createBaseIngredient(BaseIngredientName.Blue_Cheese, AcquireType.Shop, 19),
        [BaseIngredientName.Blue_Landtrap_Leaf]: createBaseIngredient(BaseIngredientName.Blue_Landtrap_Leaf, AcquireType.Kobold_Vendor, 128),
        [BaseIngredientName.Wild_Onion]: createBaseIngredient(BaseIngredientName.Wild_Onion, AcquireType.Material_Supplier, 7),
        [BaseIngredientName.Dzemael_Tomato]: createBaseIngredient(BaseIngredientName.Dzemael_Tomato, AcquireType.Gathering, 0),
        [BaseIngredientName.Coerthan_Carrot]: createBaseIngredient(BaseIngredientName.Coerthan_Carrot, AcquireType.Material_Supplier, 12),
        [BaseIngredientName.Mutton_Loin]: createBaseIngredient(BaseIngredientName.Mutton_Loin, AcquireType.Material_Supplier, 22),
        [BaseIngredientName.Sunset_Wheat_Flour]: createBaseIngredient(BaseIngredientName.Sunset_Wheat_Flour, AcquireType.Sahagin_Vendor, 2),
        [BaseIngredientName.Orobon_Liver]: createBaseIngredient(BaseIngredientName.Orobon_Liver, AcquireType.Drop, 0),
        [BaseIngredientName.Black_Pepper]: createBaseIngredient(BaseIngredientName.Black_Pepper, AcquireType.Material_Supplier, 13),
        [BaseIngredientName.Chicken_Breast]: createBaseIngredient(BaseIngredientName.Chicken_Breast, AcquireType.Material_Supplier, 58),
        [BaseIngredientName.Buffalo_Milk]: createBaseIngredient(BaseIngredientName.Buffalo_Milk, AcquireType.Material_Supplier, 4),
        [BaseIngredientName.La_Noscean_Leek]: createBaseIngredient(BaseIngredientName.La_Noscean_Leek, AcquireType.Gathering, 0),
        [BaseIngredientName.Popoto]: createBaseIngredient(BaseIngredientName.Popoto, AcquireType.Gathering, 0),
        [BaseIngredientName.Smooth_Butter]: createBaseIngredient(BaseIngredientName.Smooth_Butter, AcquireType.Sahagin_Vendor, 2),
        [BaseIngredientName.Highland_Parsley]: createBaseIngredient(BaseIngredientName.Highland_Parsley, AcquireType.Gathering, 0),
        [BaseIngredientName.Puk_Egg]: createBaseIngredient(BaseIngredientName.Puk_Egg, AcquireType.Drop, 0),
        [BaseIngredientName.Chicken_Egg]: createBaseIngredient(BaseIngredientName.Chicken_Egg, AcquireType.Material_Supplier, 5),
        [BaseIngredientName.Maple_Sap]: createBaseIngredient(BaseIngredientName.Maple_Sap, AcquireType.Material_Supplier, 3),
        [BaseIngredientName.Apkallu_Egg]: createBaseIngredient(BaseIngredientName.Apkallu_Egg, AcquireType.Drop, 0),
        [BaseIngredientName.Volcanic_Rock_Salt]: createBaseIngredient(BaseIngredientName.Volcanic_Rock_Salt, AcquireType.Gathering, 0),
        [BaseIngredientName.Gridanian_Walnut]: createBaseIngredient(BaseIngredientName.Gridanian_Walnut, AcquireType.Gathering, 0),
        [BaseIngredientName.Dodo_Egg]: createBaseIngredient(BaseIngredientName.Dodo_Egg, AcquireType.Drop, 0),
        [BaseIngredientName.Aldgoat_Milk]: createBaseIngredient(BaseIngredientName.Aldgoat_Milk, AcquireType.Material_Supplier, 4),
        [BaseIngredientName.Ruby_Tomato]: createBaseIngredient(BaseIngredientName.Ruby_Tomato, AcquireType.Material_Supplier, 16),
        [BaseIngredientName.Garlean_Garlic]: createBaseIngredient(BaseIngredientName.Garlean_Garlic, AcquireType.Material_Supplier, 5),
        [BaseIngredientName.Marmot_Meat]: createBaseIngredient(BaseIngredientName.Marmot_Meat, AcquireType.Material_Supplier, 12),
        [BaseIngredientName.Haddock]: createBaseIngredient(BaseIngredientName.Haddock, AcquireType.Shop, 4),
        [BaseIngredientName.Raptor_Shank]: createBaseIngredient(BaseIngredientName.Raptor_Shank, AcquireType.Drop, 0),
        [BaseIngredientName.Sun_Lemon]: createBaseIngredient(BaseIngredientName.Sun_Lemon, AcquireType.Sahagin_Vendor, 28),
        [BaseIngredientName.Black_Sole]: createBaseIngredient(BaseIngredientName.Black_Sole, AcquireType.Fishing, 0),
        [BaseIngredientName.Gil_Bun]: createBaseIngredient(BaseIngredientName.Gil_Bun, AcquireType.Gathering, 0),
        [BaseIngredientName.Bluebell_Salmon]: createBaseIngredient(BaseIngredientName.Bluebell_Salmon, AcquireType.Fishing, 0),
        [BaseIngredientName.Antelope_Shank]: createBaseIngredient(BaseIngredientName.Antelope_Shank, AcquireType.Drop, 0),
        [BaseIngredientName.Aldgoat_Chuck]: createBaseIngredient(BaseIngredientName.Aldgoat_Chuck, AcquireType.Drop, 0),
        [BaseIngredientName.Eft_Tail]: createBaseIngredient(BaseIngredientName.Eft_Tail, AcquireType.Drop, 0),
        [BaseIngredientName.Sour_Red]: createBaseIngredient(BaseIngredientName.Sour_Red, AcquireType.Material_Supplier, 10),
        [BaseIngredientName.Laurel]: createBaseIngredient(BaseIngredientName.Laurel, AcquireType.Gathering, 0),
        [BaseIngredientName.Faerie_Apple]: createBaseIngredient(BaseIngredientName.Faerie_Apple, AcquireType.Gathering, 0),
        [BaseIngredientName.La_Noscean_Orange]: createBaseIngredient(BaseIngredientName.La_Noscean_Orange, AcquireType.Material_Supplier, 8),
        [BaseIngredientName.Mirror_Apple]: createBaseIngredient(BaseIngredientName.Mirror_Apple, AcquireType.Gathering, 0),
        [BaseIngredientName.Prickly_Pineapple]: createBaseIngredient(BaseIngredientName.Prickly_Pineapple, AcquireType.Gathering, 0),
        [BaseIngredientName.Chamomile]: createBaseIngredient(BaseIngredientName.Chamomile, AcquireType.Gathering, 0),
        [BaseIngredientName.Honey]: createBaseIngredient(BaseIngredientName.Honey, AcquireType.Shop, 2),
        [BaseIngredientName.Thanalan_Tea_Leaves]: createBaseIngredient(BaseIngredientName.Thanalan_Tea_Leaves, AcquireType.Gathering, 0),
        [BaseIngredientName.Pearl_Ginger]: createBaseIngredient(BaseIngredientName.Pearl_Ginger, AcquireType.Gathering, 0),
        [BaseIngredientName.Cloves]: createBaseIngredient(BaseIngredientName.Cloves, AcquireType.Shop, 16),
        [BaseIngredientName.Cinnamon]: createBaseIngredient(BaseIngredientName.Cinnamon, AcquireType.Material_Supplier, 4),
        [BaseIngredientName.Rye_Flour]: createBaseIngredient(BaseIngredientName.Rye_Flour, AcquireType.Shop, 2),
        [BaseIngredientName.Iron_Acorn]: createBaseIngredient(BaseIngredientName.Iron_Acorn, AcquireType.Gathering, 0),
        [BaseIngredientName.Effervescent_Water]: createBaseIngredient(BaseIngredientName.Effervescent_Water, AcquireType.Gathering, 0),
        [BaseIngredientName.Rock_Salt]: createBaseIngredient(BaseIngredientName.Rock_Salt, AcquireType.Material_Supplier, 3),
        [BaseIngredientName.Kukuru_Bean]: createBaseIngredient(BaseIngredientName.Kukuru_Bean, AcquireType.Material_Supplier, 12),
        [BaseIngredientName.Rolanberry]: createBaseIngredient(BaseIngredientName.Rolanberry, AcquireType.Gathering, 0),
        [BaseIngredientName.Blood_Currants]: createBaseIngredient(BaseIngredientName.Blood_Currants, AcquireType.Gathering, 0),
        [BaseIngredientName.Gelatin]: createBaseIngredient(BaseIngredientName.Gelatin, AcquireType.Shop, 10),
        [BaseIngredientName.Night_Milk]: createBaseIngredient(BaseIngredientName.Night_Milk, AcquireType.Sahagin_Vendor, 84),
        [BaseIngredientName.Dalamud_Popoto]: createBaseIngredient(BaseIngredientName.Dalamud_Popoto, AcquireType.Seals, 0),
        [BaseIngredientName.Nutmeg]: createBaseIngredient(BaseIngredientName.Nutmeg, AcquireType.Gathering, 0),
        [BaseIngredientName.Cottage_Cheese]: createBaseIngredient(BaseIngredientName.Cottage_Cheese, AcquireType.Shop, 19)
    };

    const map_CraftIngredients1: {
        [name in CraftIngredientName1]: Ingredient
    } = {
        [CraftIngredientName1.Dark_Vinegar]: createCraftIngredient(CraftIngredientName1.Dark_Vinegar, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 3)
        ], [
            createInputIngredient(BaseIngredientName.Noble_Grapes, 4)
        ]),
        [CraftIngredientName1.Chicken_Stock]: createCraftIngredient(CraftIngredientName1.Chicken_Stock, 6, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 3)
        ], [
            createInputIngredient(BaseIngredientName.Chicken_Breast, 1),
            createInputIngredient(BaseIngredientName.Wild_Onion, 1),
            createInputIngredient(BaseIngredientName.Coerthan_Carrot, 1)
        ]),
        [CraftIngredientName1.Sweet_Cream]: createCraftIngredient(CraftIngredientName1.Sweet_Cream, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Buffalo_Milk, 1)
        ]),
        [CraftIngredientName1.Maple_Syrup]: createCraftIngredient(CraftIngredientName1.Maple_Syrup, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Maple_Sap, 1)
        ]),
        [CraftIngredientName1.Walnut_Bread]: createCraftIngredient(CraftIngredientName1.Walnut_Bread, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(BaseIngredientName.Buffalo_Milk, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(BaseIngredientName.Gridanian_Walnut, 1)
        ]),
        [CraftIngredientName1.Tomato_Sauce]: createCraftIngredient(CraftIngredientName1.Tomato_Sauce, 6, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Ruby_Tomato, 1),
            createInputIngredient(BaseIngredientName.Wild_Onion, 1),
            createInputIngredient(BaseIngredientName.Garlean_Garlic, 1)
        ]),
        [CraftIngredientName1.Cider_Vinegar]: createCraftIngredient(CraftIngredientName1.Cider_Vinegar, 5, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Faerie_Apple, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ]),
        [CraftIngredientName1.Natron]: createCraftIngredient(CraftIngredientName1.Natron, 1, [
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 2)
        ], [
            createInputIngredient(BaseIngredientName.Effervescent_Water, 1),
            createInputIngredient(BaseIngredientName.Rock_Salt, 1)
        ]),
        [CraftIngredientName1.Kukuru_Butter]: createCraftIngredient(CraftIngredientName1.Kukuru_Butter, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Kukuru_Bean, 2)
        ]),
        [CraftIngredientName1.Kukuru_Powder]: createCraftIngredient(CraftIngredientName1.Kukuru_Powder, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Kukuru_Bean, 2)
        ]),
        [CraftIngredientName1.Pie_Dough]: createCraftIngredient(CraftIngredientName1.Pie_Dough, 6, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ])
    };

    const map_CraftIngredients2: {
        [name in CraftIngredientName2]: Ingredient
    } = {
        [CraftIngredientName2.Maple_Sugar]: createCraftIngredient(CraftIngredientName2.Maple_Sugar, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(CraftIngredientName1.Maple_Syrup, 1)
        ]),
        [CraftIngredientName2.Cream_Cheese]: createCraftIngredient(CraftIngredientName2.Cream_Cheese, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 4)
        ], [
            createInputIngredient(BaseIngredientName.Night_Milk, 2),
            createInputIngredient(CraftIngredientName1.Sweet_Cream, 1)
        ])
    };

    const compiled_Ingredients: {
        [name in BaseIngredientName | CraftIngredientName1 | CraftIngredientName2]: Ingredient
    } = {
        ...map_BaseIngredients,
        ...map_CraftIngredients1,
        ...map_CraftIngredients2
    };

    // list

    const list_MenuItems: MenuItem[] = [
        // Parsnip_Salad
        createMenuItem(MenuName.Parsnip_Salad, MealName.Parsnip_Salad, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Alpine_Parsnip, 1),
            createInputIngredient(BaseIngredientName.Olive_Oil, 1),
            createInputIngredient(BaseIngredientName.La_Noscean_Lettuce, 1),
            createInputIngredient(BaseIngredientName.Cieldalaes_Spinach, 1),
            createInputIngredient(BaseIngredientName.Buffalo_Beans, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ]),
        // Avocado_Salad
        createMenuItem(MenuName.Avocado_Salad, MealName.Alligator_Salad, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 3),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 3)
        ], [
            createInputIngredient(BaseIngredientName.Alligator_Pear, 1),
            createInputIngredient(BaseIngredientName.Paprika, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(CraftIngredientName1.Dark_Vinegar, 1),
            createInputIngredient(BaseIngredientName.Olive_Oil, 1),
            createInputIngredient(BaseIngredientName.Blue_Cheese, 1)
        ]),
        // Mixed_Salad
        createMenuItem(MenuName.Mixed_Salad, MealName.Landtrap_Salad, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Crystal, 3),
            createElementalInput(ElementalType.Water, ElementalGrade.Crystal, 2)
        ], [
            createInputIngredient(BaseIngredientName.Blue_Landtrap_Leaf, 1),
            createInputIngredient(BaseIngredientName.La_Noscean_Lettuce, 1),
            createInputIngredient(BaseIngredientName.Wild_Onion, 1),
            createInputIngredient(BaseIngredientName.Dzemael_Tomato, 1),
            createInputIngredient(BaseIngredientName.Olive_Oil, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1)
        ]),

        // Meat_Stew
        createMenuItem(MenuName.Meat_Stew, MealName.Mutton_Stew, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Mutton_Loin, 1),
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(BaseIngredientName.Wild_Onion, 1),
            createInputIngredient(BaseIngredientName.Coerthan_Carrot, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ]),
        // Veggies_Stew
        createMenuItem(MenuName.Veggies_Stew, MealName.Chilled_Popoto_Soup, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Cluster, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Cluster, 1)
        ], [
            createInputIngredient(BaseIngredientName.La_Noscean_Leek, 1),
            createInputIngredient(BaseIngredientName.Popoto, 1),
            createInputIngredient(CraftIngredientName1.Sweet_Cream, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(BaseIngredientName.Highland_Parsley, 1)
        ]),

        // Sunny_Side_Egg
        createMenuItem(MenuName.Sunny_Side_Egg, MealName.Fried_Egg, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 3),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 2)
        ], [
            createInputIngredient(BaseIngredientName.Puk_Egg, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ]),
        // Pretzel
        createMenuItem(MenuName.Pretzel, MealName.Dark_Pretzel, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 4),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(CraftIngredientName2.Maple_Sugar, 1),
            createInputIngredient(BaseIngredientName.Chicken_Egg, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ]),

        // Mashed_Potatoes
        createMenuItem(MenuName.Mashed_Potatoes, MealName.Mashed_Popotoes, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 2),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Cottage_Cheese, 1),
            createInputIngredient(BaseIngredientName.Popoto, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(CraftIngredientName1.Sweet_Cream, 1),
            createInputIngredient(BaseIngredientName.Garlean_Garlic, 1)
        ]),
        // Sandwich
        createMenuItem(MenuName.Sandwich, MealName.Finger_Sandwich, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Cluster, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Cluster, 1)
        ], [
            createInputIngredient(BaseIngredientName.Apkallu_Egg, 1),
            createInputIngredient(BaseIngredientName.La_Noscean_Lettuce, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(BaseIngredientName.Volcanic_Rock_Salt, 1),
            createInputIngredient(CraftIngredientName1.Walnut_Bread, 1)
        ]),
        // Omelette
        createMenuItem(MenuName.Omelette, MealName.Dodo_Omelette, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Dodo_Egg, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(BaseIngredientName.Aldgoat_Milk, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(CraftIngredientName1.Tomato_Sauce, 1),
            createInputIngredient(BaseIngredientName.Highland_Parsley, 1)
        ]),
        // Small_Steak
        createMenuItem(MenuName.Small_Steak, MealName.Marmot_Steak, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Marmot_Meat, 1),
            createInputIngredient(BaseIngredientName.Wild_Onion, 1),
            createInputIngredient(BaseIngredientName.Garlean_Garlic, 1)
        ]),
        // Fried_Fish_n_Fries
        createMenuItem(MenuName.Fried_Fish_n_Fries, MealName.Battered_Fish, 1, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Haddock, 1),
            createInputIngredient(BaseIngredientName.Popoto, 1),
            createInputIngredient(BaseIngredientName.Olive_Oil, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1)
        ]),
        // Smoked_Raptor_Shank
        createMenuItem(MenuName.Smoked_Raptor_Shank, MealName.Smoked_Raptor, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 3),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 3)
        ], [
            createInputIngredient(BaseIngredientName.Raptor_Shank, 1),
            createInputIngredient(BaseIngredientName.Olive_Oil, 1),
            createInputIngredient(BaseIngredientName.Sun_Lemon, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(BaseIngredientName.Black_Pepper, 1)
        ]),

        // Baked_Fish
        createMenuItem(MenuName.Baked_Fish, MealName.Baked_Sole, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 3),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 3)
        ], [
            createInputIngredient(BaseIngredientName.Black_Sole, 1),
            createInputIngredient(BaseIngredientName.Gil_Bun, 1),
            createInputIngredient(BaseIngredientName.Cieldalaes_Spinach, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1)
        ]),
        // Chicken_Marsala
        createMenuItem(MenuName.Chicken_Marsala, MealName.Chicken_and_Mushrooms, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Gil_Bun, 1),
            createInputIngredient(BaseIngredientName.Chicken_Breast, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1)
        ]),
        // Salmon_Fillet
        createMenuItem(MenuName.Salmon_Fillet, MealName.Salmon_Meuniere, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 2),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Bluebell_Salmon, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(BaseIngredientName.Sun_Lemon, 1),
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(BaseIngredientName.Highland_Parsley, 1)
        ]),
        // Steak
        createMenuItem(MenuName.Steak, MealName.Antelope_Steak, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 2),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Antelope_Shank, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(BaseIngredientName.Garlean_Garlic, 1)
        ]),
        // Filet_Mignon
        createMenuItem(MenuName.Filet_Mignon, MealName.Eft_Steak, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 6),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 6)
        ], [
            createInputIngredient(BaseIngredientName.Eft_Tail, 1),
            createInputIngredient(BaseIngredientName.Black_Pepper, 1),
            createInputIngredient(BaseIngredientName.Garlean_Garlic, 1),
            createInputIngredient(BaseIngredientName.Sour_Red, 1),
            createInputIngredient(CraftIngredientName1.Cider_Vinegar, 1),
            createInputIngredient(BaseIngredientName.Laurel, 1)
        ]),

        // Orange_Juice
        createMenuItem(MenuName.Orange_Juice, MealName.Orange_Juice, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.La_Noscean_Orange, 3)
        ]),
        // Grape_Juice
        createMenuItem(MenuName.Grape_Juice, MealName.Grape_Juice, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 2),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Noble_Grapes, 3)
        ]),
        // Apple_Juice
        createMenuItem(MenuName.Apple_Juice, MealName.Apple_Juice, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 5),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 4)
        ], [
            createInputIngredient(BaseIngredientName.Mirror_Apple, 6)
        ]),
        // Pineapple_Juice
        createMenuItem(MenuName.Pineapple_Juice, MealName.Pineapple_Juice, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Cluster, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Cluster, 1)
        ], [
            createInputIngredient(BaseIngredientName.Prickly_Pineapple, 4)
        ]),
        // Green_Tea
        createMenuItem(MenuName.Green_Tea, MealName.Chamomile_Tea, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 2),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(BaseIngredientName.Chamomile, 1),
            createInputIngredient(BaseIngredientName.Honey, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ]),
        // Black_Tea
        createMenuItem(MenuName.Black_Tea, MealName.Mulled_Tea, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 6),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 5)
        ], [
            createInputIngredient(BaseIngredientName.Thanalan_Tea_Leaves, 1),
            createInputIngredient(BaseIngredientName.Pearl_Ginger, 1),
            createInputIngredient(BaseIngredientName.Cloves, 1),
            createInputIngredient(BaseIngredientName.Cinnamon, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ]),

        // Champagne -> Apple Juice HQ
        // Red Wine -> Grape Juice HQ
        // Old_Fashioned -> Orange Juice HQ
        // Margarita -> Apple Juice HQ
        // Cosmopolitan -> Grape Juice HQ
        // Mojito -> Apple Juice HQ
        // Tequila_Sunrise -> Orange Juice HQ
        // Whiskey_Sour -> Apple Juice HQ
        // Mimosa -> Orange Juice HQ
        // Sazerac -> Grape Juice HQ

        // Acorn_Cookies
        createMenuItem(MenuName.Acorn_Cookies, MealName.Acorn_Cookie, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 4),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 3)
        ], [
            createInputIngredient(BaseIngredientName.Rye_Flour, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(BaseIngredientName.Iron_Acorn, 1),
            createInputIngredient(BaseIngredientName.Mineral_Water, 1)
        ]),
        // Ginger_Cookies
        createMenuItem(MenuName.Ginger_Cookies, MealName.Ginger_Cookie, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 2),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 2)
        ], [
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(CraftIngredientName2.Maple_Sugar, 1),
            createInputIngredient(BaseIngredientName.Chicken_Egg, 1),
            createInputIngredient(CraftIngredientName1.Natron, 1),
            createInputIngredient(BaseIngredientName.Pearl_Ginger, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1)
        ]),
        // White_Chocolate_Pearls
        createMenuItem(MenuName.White_Chocolate_Pearls, MealName.Pearl_Chocolate, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(CraftIngredientName1.Kukuru_Butter, 1),
            createInputIngredient(CraftIngredientName2.Maple_Sugar, 1),
            createInputIngredient(BaseIngredientName.Aldgoat_Milk, 1)
        ]),
        // Dark_Chocolate_Pearls
        createMenuItem(MenuName.Dark_Chocolate_Pearls, MealName.Bubble_Chocolate, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(CraftIngredientName1.Kukuru_Powder, 1),
            createInputIngredient(CraftIngredientName1.Kukuru_Butter, 1),
            createInputIngredient(CraftIngredientName2.Maple_Sugar, 1),
            createInputIngredient(BaseIngredientName.Buffalo_Milk, 1)
        ]),

        // Shaved_Ice
        createMenuItem(MenuName.Shaved_Ice, MealName.Rolanberry_Shaved_Ice, 1, [
            createElementalInput(ElementalType.Ice, ElementalGrade.Shard, 2)
        ], [
            createInputIngredient(BaseIngredientName.Mineral_Water, 1),
            createInputIngredient(BaseIngredientName.Rolanberry, 1),
            createInputIngredient(CraftIngredientName1.Maple_Syrup, 1),
            createInputIngredient(BaseIngredientName.Buffalo_Milk, 1)
        ]),
        // Apple_Cake
        createMenuItem(MenuName.Apple_Cake, MealName.Apple_Tart, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 1)
        ], [
            createInputIngredient(CraftIngredientName1.Pie_Dough, 1),
            createInputIngredient(BaseIngredientName.Faerie_Apple, 1),
            createInputIngredient(BaseIngredientName.Chicken_Egg, 1),
            createInputIngredient(BaseIngredientName.Cinnamon, 1),
            createInputIngredient(CraftIngredientName2.Maple_Sugar, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1)
        ]),
        // Strawberry_Cake
        createMenuItem(MenuName.Strawberry_Cake, MealName.Blood_Currant_Tart, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 4),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 3)
        ], [
            createInputIngredient(CraftIngredientName1.Pie_Dough, 1),
            createInputIngredient(BaseIngredientName.Blood_Currants, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1),
            createInputIngredient(CraftIngredientName2.Maple_Sugar, 1),
            createInputIngredient(CraftIngredientName1.Natron, 1),
            createInputIngredient(BaseIngredientName.Gelatin, 1)
        ]),
        // Cheese_Cake
        createMenuItem(MenuName.Cheese_Cake, MealName.Cheese_Souffle, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 4),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 4)
        ], [
            createInputIngredient(CraftIngredientName2.Cream_Cheese, 1),
            createInputIngredient(BaseIngredientName.Night_Milk, 1),
            createInputIngredient(BaseIngredientName.Dodo_Egg, 1),
            createInputIngredient(CraftIngredientName1.Maple_Syrup, 1),
            createInputIngredient(BaseIngredientName.Sun_Lemon, 1)
        ]),
        // Pineapple_upside_down_Cake
        createMenuItem(MenuName.Pineapple_upside_down_Cake, MealName.Pineapple_Ponzecake, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Cluster, 1),
            createElementalInput(ElementalType.Water, ElementalGrade.Cluster, 1),
        ], [
            createInputIngredient(BaseIngredientName.Prickly_Pineapple, 1),
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(BaseIngredientName.Night_Milk, 1),
            createInputIngredient(BaseIngredientName.Apkallu_Egg, 1),
            createInputIngredient(CraftIngredientName1.Maple_Syrup, 1)
        ]),
        // Sweet_Pancakes
        createMenuItem(MenuName.Sweet_Pancakes, MealName.Crumpet, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Shard, 3),
            createElementalInput(ElementalType.Water, ElementalGrade.Shard, 2)
        ], [
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(BaseIngredientName.Buffalo_Milk, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1),
            createInputIngredient(CraftIngredientName1.Natron, 1),
            createInputIngredient(CraftIngredientName1.Maple_Syrup, 1),
            createInputIngredient(BaseIngredientName.Smooth_Butter, 1)
        ]),
        // Savory_Pancakes
        createMenuItem(MenuName.Savory_Pancakes, MealName.Popoto_Pancakes, 3, [
            createElementalInput(ElementalType.Fire, ElementalGrade.Cluster, 2),
            createElementalInput(ElementalType.Water, ElementalGrade.Cluster, 1)
        ], [
            createInputIngredient(BaseIngredientName.Dalamud_Popoto, 1),
            createInputIngredient(BaseIngredientName.Mirror_Apple, 1),
            createInputIngredient(BaseIngredientName.Sunset_Wheat_Flour, 1),
            createInputIngredient(BaseIngredientName.Nutmeg, 1),
            createInputIngredient(BaseIngredientName.Apkallu_Egg, 1),
            createInputIngredient(BaseIngredientName.Table_Salt, 1)
        ])
    ];

    console.debug(compiled_Ingredients, list_MenuItems);

    // functions

    function createBaseIngredient(name: BaseIngredientName, acquire: AcquireType, price: number): Ingredient {
        return {
            name: name,
            acquire: acquire,
            price: price
        };
    }

    function createCraftIngredient(name: CraftIngredientName1 | CraftIngredientName2, yields: number, elemental: Elemental[], ingridients: InputIngredient[]): Ingredient {
        return {
            name: name,
            acquire: AcquireType.Crafting,
            price: 0,
            recipe: {
                output: name,
                yield: yields,
                elemental: elemental,
                ingredients: ingridients
            }
        };
    }

    function createMenuItem(mname: MenuName, oname: MealName, yields: number, elemental: Elemental[], ingredients: InputIngredient[]): MenuItem {
        return {
            name: mname,
            recipe: {
                output: oname,
                yield: yields,
                elemental: elemental,
                ingredients: ingredients
            }
        };
    }

    function createElementalInput(type: ElementalType, grade: ElementalGrade, amount: number): Elemental {
        return {
            type: type,
            grade: grade,
            amount: amount
        };
    }

    function createInputIngredient(ingredient: IngredientName, amount: number): InputIngredient {
        return {
            ...(map_BaseIngredients[ingredient] ?? map_CraftIngredients1[ingredient] ?? compiled_Ingredients[ingredient]),
            amount: amount
        };
    }

    function printFullIngredientList(scale: number = 1): void {
        let elementalCountMap: {
            [k: symbol]: number
        } = {};
        let ingredientCountMap: {
            [at in AcquireType]: {
                [k: symbol]: {
                    ingredient: symbol,
                    count: number
                }
            }
        } = {
            // Material_Supplier = 'Material Supplier',
            [AcquireType.Material_Supplier]: {},
            // Gathering = 'Gathering',
            [AcquireType.Gathering]: {},
            // Crafting = 'Crafting',
            [AcquireType.Crafting]: {},
            // Fishing = 'Fishing',
            [AcquireType.Fishing]: {},
            // Sahagin_Vendor = 'Sahagin Vendor',
            [AcquireType.Sahagin_Vendor]: {},
            // Kobold_Vendor = 'Kobold Vendor',
            [AcquireType.Kobold_Vendor]: {},
            // Shop = 'Shop',
            [AcquireType.Shop]: {},
            // Seals = 'Seals',
            [AcquireType.Seals]: {},
            // Drop = 'Drop'
            [AcquireType.Drop]: {},
        };

        function recursiveRecipeReader(root: Recipe): void {
            for (let elemental of root.elemental) {
                elementalCountMap[`${elemental.type} ${elemental.grade}`] = (elementalCountMap[`${elemental.type} ${elemental.grade}`] ?? 0) + 1;
            }

            for (let ingredient of root.ingredients) {
                ingredientCountMap[ingredient.acquire][ingredient.name] = {
                    ingredient: ingredient,
                    count: (ingredientCountMap[ingredient.acquire][ingredient.name]?.count ?? 0) + 1,
                };

                if (ingredient.recipe?.ingredients?.length > 0) {
                    recursiveRecipeReader(ingredient.recipe);
                }
            }
        }

        for (let item of list_MenuItems) {
            recursiveRecipeReader(item.recipe);
        }

        console.debug('Elemental', elementalCountMap);
        console.debug('Ingredient', ingredientCountMap);

        // pretty
        let prettyStr = '\`\`\`\n';

        prettyStr += '--- Material Supplier ---\n';
        let ingMSKeys = Object.keys(ingredientCountMap[AcquireType.Material_Supplier]).sort((a, b) => ingredientCountMap[AcquireType.Material_Supplier][a].ingredient.price > ingredientCountMap[AcquireType.Material_Supplier][b].ingredient.price ? 1 : -1);
        for (let key of ingMSKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Material_Supplier][key].count * scale).toLocaleString('de-DE')} ${key} - ${ingredientCountMap[AcquireType.Material_Supplier][key].ingredient.price} Gil\n`;
        }

        prettyStr += '\n--- Shops ---\n';
        let ingSKeys = Object.keys(ingredientCountMap[AcquireType.Shop]).sort((a, b) => ingredientCountMap[AcquireType.Shop][a].ingredient.price > ingredientCountMap[AcquireType.Shop][b].ingredient.price ? 1 : -1);
        for (let key of ingSKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Shop][key].count * scale).toLocaleString('de-DE')} ${key} - ${ingredientCountMap[AcquireType.Shop][key].ingredient.price} Gil\n`;
        }

        prettyStr += '\n--- Sahagin Vendor ---\n';
        let ingSVKeys = Object.keys(ingredientCountMap[AcquireType.Sahagin_Vendor]).sort((a, b) => ingredientCountMap[AcquireType.Sahagin_Vendor][a].ingredient.price > ingredientCountMap[AcquireType.Sahagin_Vendor][b].ingredient.price ? 1 : -1);
        for (let key of ingSVKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Sahagin_Vendor][key].count * scale).toLocaleString('de-DE')} ${key} - ${ingredientCountMap[AcquireType.Sahagin_Vendor][key].ingredient.price} Gil\n`;
        }

        prettyStr += '\n--- Kobold Vendor ---\n';
        let ingKVKeys = Object.keys(ingredientCountMap[AcquireType.Kobold_Vendor]).sort((a, b) => ingredientCountMap[AcquireType.Kobold_Vendor][a].ingredient.price > ingredientCountMap[AcquireType.Kobold_Vendor][b].ingredient.price ? 1 : -1);
        for (let key of ingKVKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Kobold_Vendor][key].count * scale).toLocaleString('de-DE')} ${key} - ${ingredientCountMap[AcquireType.Kobold_Vendor][key].ingredient.price} Gil\n`;
        }

        prettyStr += '\n--- GC Seals ---\n';
        let ingGCSKeys = Object.keys(ingredientCountMap[AcquireType.Seals]).sort((a, b) => ingredientCountMap[AcquireType.Seals][a].ingredient.price > ingredientCountMap[AcquireType.Seals][b].ingredient.price ? 1 : -1);
        for (let key of ingGCSKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Seals][key].count * scale).toLocaleString('de-DE')} ${key}\n`;
        }

        prettyStr += '\n--- Gathering ---\n';
        let ingGKeys = Object.keys(ingredientCountMap[AcquireType.Gathering]).sort((a, b) => ingredientCountMap[AcquireType.Gathering][a].count > ingredientCountMap[AcquireType.Gathering][b].count ? 1 : -1);
        for (let key of ingGKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Gathering][key].count * scale).toLocaleString('de-DE')} ${key}\n`;
        }

        prettyStr += '\n--- Fishing ---\n';
        let ingFKeys = Object.keys(ingredientCountMap[AcquireType.Fishing]).sort((a, b) => ingredientCountMap[AcquireType.Fishing][a].count > ingredientCountMap[AcquireType.Fishing][b].count ? 1 : -1);
        for (let key of ingFKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Fishing][key].count * scale).toLocaleString('de-DE')} ${key}\n`;
        }

        prettyStr += '\n--- Drops ---\n';
        let ingDKeys = Object.keys(ingredientCountMap[AcquireType.Drop]).sort((a, b) => ingredientCountMap[AcquireType.Drop][a].count > ingredientCountMap[AcquireType.Drop][b].count ? 1 : -1);
        for (let key of ingDKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Drop][key].count * scale).toLocaleString('de-DE')} ${key}\n`;
        }

        prettyStr += '\n--- Crafting ---\n';
        let ingCKeys = Object.keys(ingredientCountMap[AcquireType.Crafting]).sort((a, b) => ingredientCountMap[AcquireType.Crafting][a].count > ingredientCountMap[AcquireType.Crafting][b].count ? 1 : -1);
        for (let key of ingCKeys) {
            prettyStr += `${(ingredientCountMap[AcquireType.Crafting][key].count * scale * ingredientCountMap[AcquireType.Crafting][key].ingredient.recipe.yield).toLocaleString('de-DE')} ${key}\n`;
        }

        prettyStr += '\n--- Elemental ---\n';
        let elementalKeys = Object.keys(elementalCountMap).sort((a, b) => elementalCountMap[a] > elementalCountMap[b] ? 1 : -1);
        for (let key of elementalKeys) {
            prettyStr += `${(elementalCountMap[key] * scale).toLocaleString('de-DE')} ${key}\n`;
        }

        prettyStr += '\n--- Total Recipe Toll ---\n';
        for (let item of list_MenuItems) {
            prettyStr += `${item.recipe.yield * scale} ${item.recipe.output}\n`;
        }

        console.debug(`${prettyStr}\`\`\``);
    }

    printFullIngredientList(1);

}