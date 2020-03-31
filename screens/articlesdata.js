import React from 'react'
import { Text } from 'react-native'
export const data = [
    {
        id: 1,
        title: "Classic Greek Salad",
        description: "Greek salad is native to the country of Greece",
        image: require('./article-list-4/assets/classicgreek.png'),
        content: "The ingredients of this salad are tomato pieces, sliced cucumber, onions, olives, feta cheese and is later dressed with olive oil in addition to the seasoning. You can also add sliced bell peppers which amplify the taste of the salad. The countries outside Greece, add lettuce in the salad whereas the original recipe does not have it.",
        category: "Vegetable Salad"
    },
    {
        id: 2,
        title: "Pad Thai Salad with Coconut Lime Dressing",
        description: "This is a type of vegetarian salad which is a mix of both fruits and vegetables.",
        image: require('./article-list-4/assets/padthai.png'),
        content: "You can make this at home easily if you have the necessary ingredients. You need to stir the pieces of fruits like papaya, and vegetables like carrot, zucchini, spring onion, sprouts and coriander, mint, green chilli, in a huge bowl and you also add goji berry or pineapple for more taste. Add some salad dressing or seasoning at the end for taste. If you are a non-vegetarian, then you can add meat of your choice along with vegetables, cheese, and dressing oils.",
        category: "Vegetable Salad"
    },
    {
        id: 3,
        title: "Green Goddess Chicken Salad",
        description: "This salad has a history that cannot be forgotten.",
        image: require('./article-list-4/assets/greekgoddess.png'),
        content: "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. You have to toss it for some time till you see that all the ingredients are mixed.",
        category: "Chicken Salad"
    },
    {
        id: 4,
        title: "Fruity Pasta Salad",
        description: "Taste at it's peak",
        image: require('./article-list-4/assets/fruitypasta.png'),
        content: "A vegetarian pasta salad with fruits in it sounds like a weird combination right? It isn’t. It is one of the tastiest salads that you will ever have. Any type of pasta is boiled and you have to toss it with various fresh fruits like mangoes, grapes, oranges, apples, kiwi etc.",
        category: "Fruit Salad"
    }, {
        id: 5,
        title: "Bulgur Wheat and Shrimp Salad",
        description: "Tangy taste",
        image: require('./article-list-4/assets/bulgurwheat.png'),
        content: "Bulgur wheat is coarsely ground wheat grain and is parboiled. In a big bowl mix, the vegetables like onion, cucumber, corn, tomatoes and the main ingredient shrimp which you cook are mixed with a bit of oil and lime juice and seasonings and served. The taste will be a bit tangy due to the lime present in the salad.",
        category: "Vegetable Salad"
    },
    {
        id: 6,
        title: "New Potato Salad",
        description: "It tastes even better if the skin of the potatoes is still on.",
        image: require('./article-list-4/assets/newpotato.png'),
        content: "Potato is the best vegetable that exists on this planet. And salads that you make from this vegetable are the best. In this salad, the potatoes are mashed up perfectly and you have to mix it in a bowl with onions, cucumber and mint leaf with seasonings. It tastes even better if the skin of the potatoes is still on.",
        category: "Vegetable Salad"
    },
    {
        id: 7,
        title: "Garlicky Tomato Salad",
        description: "For all the tomato lovers",
        image: require('./article-list-4/assets/garlickytomato.png'),
        content: "For all the tomato lovers out there, this is the best salad for them. You have to chop tomatoes of different colours into small slices, and you have to mix it thoroughly with garlic vinaigrette. You can serve it on a lettuce and pumpkin for taste and presentation. Garnish it with sunflower seeds.",
        category: "Vegetable Salad"
    },
    {
        id: 8,
        title: "Apple and Sprout Salad",
        description: "You can make this type of salad at home with ease.",
        image: require('./article-list-4/assets/appleandsprout.png'),
        content: "You can make this type of salad at home with ease. You have to make use of apple and sprouts as the main ingredients. Add other vegetables like celery, carrot and sunflower seeds so that the salad does not taste bland. You can dress it with ginger, lime juice, olive and sesame oil and add a little bit of soy sauce.",
        category: "Fruit Salad"
    },
    {
        id: 9,
        title: "Crunchy Nut Coleslaw",
        description: "Easy to make.",
        image: require('./article-list-4/assets/crunchynut.png'),
        content: "It is a vegetable salad that is easy to make. Cabbage, carrot, and radishes are the main ingredients of this salad. Then, you should mix it with sultanas, spring onions, and peanuts which you have to roast. You can then add a creamy dressing for taste. Everyone loves this type of healthy salad.",
        category: "Vegetable Salad"
    },
    {
        id: 10,
        title: "Asian Chicken Salad",
        description: "appetiser and a main course dish.",
        image: require('./article-list-4/assets/asianchicken.png'),
        content: "You will get the taste of an appetiser and a main course dish with this one salad. The food consists of chow mien noodles which you have to add at the end for garnish, then you have to peel the vegetables into a large bowl, and add chicken with almonds and various other spices. Oil, soy sauce, vinegar, and sugar are mixed together and tossed with vegetables and chicken. Then you have to add noodles for garnishing.",
        category: "Chicken Salad"
    },
    {
        id: 11,
        title: "Lobster Salad",
        description: "Healthy and powerful",
        image: require('./article-list-4/assets/lobster.png'),
        content: "Lobster is an exotic seafood which you can eat as a main dish. In this salad, you have to toss the lobster meat with lime juice and celery and on a medium flame, stir the mixture gently with mayonnaise and some seasonings, and you can serve it on lettuce with avocado slices.",
        category: "Seafood Salad"
    },
    {
        id: 12,
        title: "Tropical Salmon Salad",
        description: "Eat as a main dish.",
        image: require('./article-list-4/assets/tropicalsalmon.png'),
        content: "Another seafood salad that you can also eat as a main dish. The salmon is seasoned with salt and pepper and cooked for 20 minutes. Get a puree of mango, honey, lemon juice, rice, vinegar and sprinkle with salt and pepper and after that steam it in olive oil. You can place the salmon on spinach leaves, onion, avocado and small pieces of mango.",
        category: "Seafood Salad"
    },
    {
        id: 13,
        title: "Warm Sesame Chicken Salad",
        description: "Crisp and vegetables",
        image: require('./article-list-4/assets/warmsesame.png'),
        content: "In this type of salad, the chicken is properly fried till it is crispy and you can place it on fresh vegetables and add some dressing with oils and herbs for flavour.",
        category: "Chicken Salad"
    },
    {
        id: 14,
        title: "Broccoli Salad",
        description: "Simple and healthy",
        image: require('./article-list-4/assets/broccoli.png'),
        content: "This simple salad is healthy and tasty. You can make this by mixing broccoli with finely chopped bacon, onion, and peas. You have to toss the dressing with the broccoli mixture and serve it fresh. It has the perfect balance between sweet and sour.",
        category: "Vegetable Salad"
    },
    {
        id: 15,
        title: "Detox Salad",
        description: "Use any of the vegetables or fruits.",
        image: require('./article-list-4/assets/detox.png'),
        content: "There are many different detox salads which make us feel lighter and happier. You can use any of the vegetables or fruits that you want to. All you need to do is put them together and add some dressing if you want to and then serve it. If you are craving seafood, you can add salmon to the salad.",
        category: "Fruit Salad"
    },
    {
        id: 16,
        title: "Honey Lime Quinoa Fruit Salad",
        description: "Best fruit Salad",
        image: require('./article-list-4/assets/honeylime.png'),
        content: "One of the best fruit salad a person can ever have. It consists of fruits like strawberries, blackberries, blueberries, and mango that you toss together with glazed quinoa and honey lime. The honey glaze makes the salad irresistible.",
        category: "Fruit Salad"
    },
    {
        id: 17,
        title: "Israeli Salad",
        description: "Israeli breakfast",
        image: require('./article-list-4/assets/israeli.png'),
        content: "You can also call this salad as Arab Salad. You can make this salad by chopping vegetables like tomatoes, cucumber, onions, bell peppers, and parsley. It has many variations with other vegetables like carrot, spring onions, etc. This salad is a major part of the Israeli breakfast.",
        category: "Vegetable Salad"
    },
    {
        id: 18,
        title: "Fresh Tuna Salad with Avocado",
        description: "Seafood lovers.",
        image: require('./article-list-4/assets/freshtuna.png'),
        content: "In this salad, you have to mix mayonnaise with minced anchovies, capers, garlic and fresh lemon juice to form the dressing and then mash the tuna so that you can easily mix them together with ease. You can garnish it with parsley leaves or mint leaves and season it with salt and pepper.",
        category: "Seafood Salad"
    },
    {
        id: 19,
        title: "Summer Greens and Strawberries",
        description: "Poppy Seed Dressing.",
        image: require('./article-list-4/assets/summergreens.png'),
        content: "One cannot miss out on this salad during the summer season. It consists of leafy greens mixed with orange juice, olive oil, and the orange rind which you have to finely chop. You should then mix it with poppy seeds and gently toss it.",
        category: "Fruit Salad"
    },
    {
        id: 20,
        title: "Orange Zest Summer Salad",
        description: "Healthy and powerful",
        image: require('./article-list-4/assets/orangezest.png'),
        content: "You cannot miss out on this salad when you are on a diet. It has low calories, yet it is quite filling. You have to mix fruits with the leafy greens so that it holds together.",
        category: "Fruit Salad"
    }
]