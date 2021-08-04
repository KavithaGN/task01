var cat = {
 name: ‘Fluffy’,
 activities: [‘play’, ‘eat cat food’],
 catFriends: [
 {
name: ‘bar’,
activities: [‘be grumpy’, ‘eat bread omblet’],
weight: 8,
furcolor: ‘white’
},
{
name: ‘foo’,
activities: [‘sleep’, ‘pre-sleep naps’],
weight: 3
}
]
}

console.log(cat);


Basic Tasks to play with JSON
Add height and weight to Fluffy
solution :  cat.height = 2; cat. Weight = 5;
Fluffy name is spelled wrongly. Update it to Fluffyy
Solution: cat.name = “fluffyy”;
List all the activities of Fluffyy’s catFriends.
Solution:  cat.catFriends[0].activities;       cat.catFriends[1].activities;
Print the catFriends names.
Solution:  cat.catFriends[0].name;       cat.catFriends[1].name;
Print the total weight of catFriends
Solution:  cat.catFriends[0].weight +   cat.catFriends[1].weight;
Print the total activities of all cats (op:6)
Solution: cat.catFriends[0].activities + cat.catFriends[1].activities + cat.activities;
Add 2 more activities to bar & foo cats
solution : cat.catFriends[0].activities = cat.catFriends[0].activities + ["purr", "cry for milk"];
cat.catFriends[1].activities = cat.catFriends[1].activities + ["scratch", "chase mice"];
Update the fur color of bar
Solution: 
cat.catFriends[1].furcolor = "black";
