var randomMovieArray = [
"12 Angry Men",
"Metropolis",
"City Lights",
"Emil and the Detectives",
"It Happened One Night",
"Modern Times",
"Gone With the Wind",
"The Great Dictator",
"Citizen Kane",
"Casablanca",
"Saludos Amigos",
"A Canterbury Tale",
"Double Indemnity",
"NOTORIOUS",
"Song of the South",
"Fun & Fancy Free",
"Bicycle Thieves",
"Melody Time",
"Rope",
"So Dear to My Heart",
"The Third Man",
"Aladdin",
"Rashômon",
"Sunset Boulevard",
"Treasure Island",
"A Streetcar Named Desire",
"Strangers on a Train",
"High Noon",
"Ikiru",
"The Story of Robin Hood and His Merrie Men",
"Alice in Wonderland",
"Roman Holiday",
"Tokyo Story",
"La Strada",
"On the Waterfront",
"Rear Window",
"Sabrina",
"Seven Samurai",
"Davy Crockett, King of the Wild Frontier",
"East of Eden",
"Lady and the Tramp",
"The Littlest Outlaw",
"Davy Crockett and the River Pirates",
"The Great Locomotive Chase",
"The Searchers",
"Westward Ho, the Wagons!",
"Amélie",
"Johnny Tremain",
"Old Yeller",
"The Seventh Seal",
"Throne of Blood",
"Wild Strawberries",
"Cat on a Hot Tin Roof",
"The Light in the Forest",
"Tonka",
"VERTIGO",
"Ben-Hur",
"Darby O'Gill and the Little People",
"Hiroshima Mon Amour",
"North by Northwest",
"Sleeping Beauty",
"SOME LIKE IT HOT",
"The 400 Blows",
"Third Man on the Mountain",
"Pollyanna",
"Breathless",
"L'avventura",
"La Dolce Vita",
"Psycho",
"Ten Who Dared",
"American History X",
"Back to the Future",
"One Hundred and One Dalmatians",
"The Absent-Minded Professor",
"The Hustler",
"The Parent Trap",
"West Side Story",
"Almost Angels",
"Big Red",
"Bon Voyage!",
"Lawrence of Arabia",
"Lolita",
"Mamma Roma",
"Moon Pilot",
"The Exterminating Angel",
"The Legend of Lobo",
"The Manchurian Candidate",
"To Kill a Mockingbird",
"8 ½",
"Miracle of the White Stallions",
"Savage Sam",
"Son of Flubber",
"Summer Magic",
"The Great Escape",
"The Sword in the Stone",
"The Three Lives of Thomasina",
"A Tiger Walks",
"Mary Poppins",
"My Fair Lady",
"The Misadventures of Merlin Jones",
"The Moon-Spinners",
"That Darn Cat!",
"The Monkey's Uncle",
"The Sound of Music",
"Those Calloways",
"Follow Me, Boys!",
"Persona",
"The Fighting Prince of Donegal",
"The Good, the Bad and the Ugly",
"The Ugly Dachshund",
"Belle De Jour",
"Bonnie and Clyde",
"Charlie, the Lonesome Cougar",
"Le Samurai",
"Monkeys, Go Home!",
"The Adventures of Bullwhip Griffin",
"The Gnome-Mobile",
"The Graduate",
"The Happiest Millionaire",
"Batman",
"2001: A Space Odyssey",
"Blackbeard's Ghost",
"Hour of the Wolf",
"Once Upon a Time in the West",
"Rosemary's Baby",
"The Horse in the Gray Flannel Suit",
"The One and Only, Genuine, Original Family Band",
"Butch Cassidy and the Sundance Kid",
"Easy Rider",
"Midnight Cowboy",
"Rascal",
"Smith!",
"The Italian Job",
"The Wild Bunch",
"King of the Grizzlies",
"M*A*S*H",
"The Aristocats",
"The Boatniks",
"The Wild Country",
"A Clockwork Orange",
"Scandalous John",
"Straw Dogs",
"The Decameron",
"The Million Dollar Duck",
"Beauty and the Beast",
"Beetlejuice",
"Last Tango in Paris",
"Napoleon and Samantha",
"Now You See Him, Now You Don't",
"Snowball Express",
"Solaris",
"The Godfather",
"The Godfather",
"Charley and the Angel",
"One Little Indian",
"Scarecrow",
"Serpico",
"Superdad",
"The World's Greatest Athlete",
"Chinatown",
"Herbie Rides Again",
"Phantom of Liberty",
"The Bears and I",
"Big",
"The Island at the Top of the World",
"Dog Day Afternoon",
"Love and Death",
"Monty Python and the Holy Grail",
"One Flew Over the Cuckoo's Nest",
"One of Our Dinosaurs Is Missing",
"Ride a Wild Pony",
"The Apple Dumpling Gang",
"The Boy Who Talked to Badgers",
"The Rocky Horror Picture Show",
"The Strongest Man in the World",
"All the President's Men",
"Blade",
"Gus",
"Network",
"Rocky",
"Taxi Driver",
"Annie Hall",
"Candleshoe",
"Close Encounters of the Third Kind",
"Herbie Goes to Monte Carlo",
"Saturday Night Fever",
"Breakfast at Tiffany's",
"Cast Away",
"The Many Adventures of Winnie the Pooh",
"The Rescuers",
"Grease",
"Halloween",
"Hot Lead & Cold Feet",
"Return From Witch Mountain",
"The Cat From Outer Space",
"The Deer Hunter",
"Alien",
"Apocalypse Now",
"Being There",
"Mad Max",
"The North Avenue Irregulars",
"The Spaceman and King Arthur",
"And Justice for All",
"Fame",
"Foxes",
"Herbie Goes Bananas",
"Little Darlings",
"Popeye",
"Raging Bull",
"The Blues Brothers",
"Cinderella",
"The Last Flight of Noah's Ark",
"The Shining",
"Condorman",
"Die Hard",
"The Fox and the Hound",
"Blade Runner",
"Fast Times at Ridgemont High",
"Gandhi",
"Grease 2",
"Night Crossing",
"Tex",
"The King of Comedy",
"Tootsie",
"Tron",
"A Christmas Story",
"Never Cry Wolf",
"Dirty Harry",
"Scarface",
"Something Wicked This Way Comes",
"The Outsiders",
"Tiger Town",
"Trading Places",
"Vacation",
"Valley Girl",
"Amadeus",
"Footloose",
"Eternal Sunshine of the Spotless Mind",
"Ferris Bueller's Day Off",
"Night of the Comet",
"Once Upon a Time in America",
"Paris, Texas",
"Revenge of the Nerds",
"Sixteen Candles",
"Suburbia",
"The Karate Kid",
"The Neverending Story",
"The Wild Life",
"Fight Club",
"Brazil",
"Girls Just Want to Have Fun",
"National Lampoon'S European Vacation",
"One Magic Christmas",
"Real Genius",
"The Black Cauldron",
"Finding Nemo",
"The Color Purple",
"The Goonies",
"The Journey of Natty Gann",
"The Legend of Billie Jean",
"The Purple Rose of Cairo",
"Weird Science",
"Blue Velvet",
"Forrest Gump",
"Flight of the Navigator",
"Howard the Duck",
"Modern Girls",
"One Crazy Summer",
"Platoon",
"Pretty in Pink",
"Sid & Nancy",
"Stand by Me",
"The Mission",
"Benji the Hunted",
"Can't Buy Me Love",
"Less Than Zero",
"Lethal Weapon",
"Planes, Trains and Automobiles",
"Summer School",
"The Brave Little Toaster",
"The Last Emperor",
"The Lost Boys",
"The Untouchables",
"WINGS OF DESIRE",
"Freaky Friday",
"Full Metal Jacket",
"Ghostbusters",
"Cinema Paradiso",
"Coming to America",
"Goodfellas",
"Hairspray",
"Scrooged",
"They Live",
"Who Framed Roger Rabbit",
"Harry Potter and the Deathly Hallows: Part 1",
"Back to the Future Part II",
"Harry Potter and the Deathly Hallows: Part 2",
"Bill & Ted's Excellent Adventure",
"Cheetah",
"Dead Poets Society",
"Ghostbusters II",
"Honey, I Shrunk the Kids",
"National Lampoon's Christmas Vacation",
"Sex, Lies, and Videotape",
"Harry Potter and the Goblet of Fire",
"Harry Potter and the Half-Blood Prince",
"Back to the Future Part III",
"Captain America",
"Cry-Baby",
"Edward Scissorhands",
"Harry Potter and the Order of the Phoenix",
"Harry Potter and the Prisoner of Azkaban",
"Pretty Woman",
"Shipwrecked",
"The Godfather: Part III",
"Tremors",
"Wild at Heart",
"White Fang",
"Boyz N the Hood",
"Don't Tell Mom the Babysitter's Dead",
"Europa",
"Fried Green Tomatoes",
"Hook",
"Kafka",
"Point Break",
"The Addams Family",
"The Double Life of Veronique",
"Wild Hearts Can't Be Broken",
"Bram Stoker's Dracula",
"A Few Good Men",
"A League of Their Own",
"Heat",
"Hercules",
"American Me",
"Basic Instinct",
"Bitter Moon",
"Dracula",
"El Mariachi",
"Encino Man",
"Glengarry Glen Ross",
"Home Alone 2: Lost in New York",
"Malcolm X",
"My Cousin Vinny",
"Reservoir Dogs",
"Scent of a Woman",
"Sister Act",
"The Mighty Ducks",
"The Muppet Christmas Carol",
"A Far off Place",
"Bound by Honor",
"Carlito's Way",
"Cool Runnings",
"Dazed and Confused",
"Groundhog Day",
"Homeward Bound: The Incredible Journey",
"In the Name of the Father",
"Hocus Pocus",
"Home Alone",
"Philadelphia",
"Schindler's List",
"Short Cuts",
"Son in Law",
"The Adventures of Huck Finn",
"The Fugitive",
"The Nightmare Before Christmas",
"The Piano",
"The Sandlot",
"Three Colors: Blue",
"Tombstone",
"True Romance",
"Airheads",
"Angels in the Outfield",
"Blank Check",
"Clerks",
"D2: The Mighty Ducks",
"Ed Wood",
"Four Weddings and a Funeral",
"Interview With the Vampire",
"Iron Will",
"Legends of the Fall",
"Inception",
"Indiana Jones and the Last Crusade",
"Muriel's Wedding",
"Natural Born Killers",
"Indiana Jones and the Temple of Doom",
"Speed",
"Stargate",
"The Adventures of Priscilla, Queen of the Desert",
"The Crow",
"The Fantastic Four",
"Iron Man",
"Jurassic Park",
"The Santa Clause",
"The Shawshank Redemption",
"Three Colors: Red",
"Three Colors: White",
"A Goofy Movie",
"A Kid in King Arthur's Court",
"Before Sunrise",
"Braveheart",
"Casino",
"Clueless",
"Dead Man",
"Dead Man Walking",
"Empire Records",
"Friday",
"Heavyweights",
"Jumanji",
"Operation Dumbo Drop",
"Outbreak",
"Pocahontas",
"Showgirls",
"Tall Tale",
"The Barefoot Executive",
"The Big Green",
"Leon: The Professional",
"To Wong Foo, Thanks for Everything! Julie Newmar",
"Tom and Huck",
"Little Miss Sunshine",
"Mean Girls",
"Underground",
"Waiting to Exhale",
"101 Dalmatians",
"A Time to Kill",
"D3: The Mighty Ducks",
"Fargo",
"First Kid",
"Freeway",
"Happy Gilmore",
"Homeward Bound II: Lost in San Francisco",
"Independence Day",
"James and the Giant Peach",
"Mars Attacks!",
"Matilda",
"Men in Black",
"Muppet Treasure Island",
"Scream",
"That Thing You Do!",
"The Birdcage",
"The Craft",
"The Hunchback of Notre Dame",
"Mission: Impossible",
"Moana",
"Waiting for Guffman",
"Air Bud",
"Angels in the Endzone",
"Beauty and the Beast: The Enchanted Christmas",
"Boogie Nights",
"Con Air",
"Flubber",
"George of the Jungle",
"Grosse Pointe Blank",
"Jungle 2 Jungle",
"Liar Liar",
"Life Is Beautiful",
"Lost Highway",
"Monsters, Inc.",
"Open Your Eyes",
"Romy and Michele's High School Reunion",
"That Darn Cat",
"The Devil's Advocate",
"The Fifth Element",
"The Game",
"A Bug's Life",
"A Knight in Camelot",
"Air Bud: Golden Receiver",
"Mulan",
"National Treasure",
"Black Cat, White Cat",
"Brink!",
"Dark City",
"Halloweentown",
"Haunted Mansion",
"Meet the Deedles",
"Mighty Joe Young",
"National Treasure: Book of Secrets",
"Pi",
"Pocahontas II: Journey to a New World",
"Practical Magic",
"Run Lola Run",
"Ocean's Eleven",
"Shakespeare in Love",
"Oldboy",
"The Lion King 2: Simba's Pride",
"The Truman Show",
"The Wedding Singer",
"The Wonderful Ice Cream Suit",
"American Beauty",
"Being John Malkovich",
"Blast From the Past",
"Can of Worms",
"Dick",
"Dogma",
"Don't Look Under the Bed",
"Doug's 1st Movie",
"Drive Me Crazy",
"Drop Dead Gorgeous",
"Endurance",
"Eyes Wide Shut",
"Pete's Dragon",
"Galaxy Quest",
"Ghost Dog: The Way of the Samurai",
"Horse Sense",
"Johnny Tsunami",
"Magnolia",
"Mickey's Once Upon a Christmas",
"My Favorite Martian",
"Never Been Kissed",
"October Sky",
"Office Space",
"Smart House",
"Stigmata",
"Peter Pan",
"Pirates of the Caribbean: Dead Man's Chest",
"The 13th Warrior",
"The Blair Witch Project",
"The Boondock Saints",
"The Insider",
"The Iron Giant",
"The Matrix",
"The Sixth Sense",
"The Straight Story",
"The Thirteenth Year",
"Pirates of the Caribbean: The Curse of the Black Pearl",
"Pulp Fiction",
"Wild Wild West",
"Zenon: Girl of the 21st Century",
"10 Things I Hate About You",
"102 Dalmatians",
"Alley Cats Strike",
"Almost Famous",
"Amores Perros",
"An Extremely Goofy Movie",
"Angels in the Infield",
"Best in Show",
"Bring It On",
"Chicken Run",
"Dancer in the Dark",
"Dinosaur",
"Fantasia 2000",
"Geppetto",
"Gladiator",
"High Fidelity",
"Mail to the Chief",
"Malèna",
"Memento",
"Miracle in Lane 2",
"Miss Congeniality",
"Mom's Got a Date With a Vampire",
"O Brother, Where Art Thou?",
"Phantom of the Megaplex",
"Quints",
"Ready to Run",
"Remember the Titans",
"Requiem for a Dream",
"Rip Girls",
"Snatch",
"Stepsister From Planet Weird",
"The Broken Hearts Club: A Romantic Comedy",
"The Color of Friendship",
"Raiders of the Lost Ark",
"Ratatouille",
"The Little Mermaid II: Return to the Sea",
"The Other Me",
"The Princess and the Warrior",
"The Ultimate Christmas Present",
"Up, Up, and Away",
"Return of the Jedi",
"Air Bud 3: World Pup",
"Robin Hood",
"Saving Private Ryan",
"Atlantis: The Lost Empire",
"Dogtown and Z-Boys",
"Donnie Darko",
"Ghost World",
"Gosford Park",
"Halloweentown II: Kalabar's Revenge",
"Harry Potter and the Sorcerer's Stone",
"Jett Jackson: The Movie",
"Jumping Ship",
"K-PAX",
"Lady and the Tramp II: Scamp's Adventure",
"Lara Croft: Tomb Raider",
"Legally Blonde",
"Max Keeble's Big Move",
"Motocrossed",
"Moulin Rouge!",
"Mulholland Drive",
"Recess: School's Out",
"Spider-Man",
"The Jennie Project",
"Spider-Man 2",
"Spirited Away",
"Star Wars",
"The Other Side of Heaven",
"The Poof Point",
"Training Day",
"Wet Hot American Summer",
"Zenon: The Zequel",
"Zoolander",
"Harry Potter and the Sorcerer's Stone",
"A Ring of Endless Light",
"Air Bud: Seventh Inning Fetch",
"Blade II",
"Cadet Kelly",
"Catch Me If You Can",
"Cinderella II: Dreams Come True",
"City of God",
"Double Teamed",
"Gangs of New York",
"Get a Clue",
"Harry Potter and the Chamber of Secrets",
"Hero",
"Ice Age",
"Insomnia",
"Lilo & Stitch",
"My Big Fat Greek Wedding",
"Return to Never Land",
"Signs",
"Snow Dogs",
"Talk to Her",
"The Country Bears",
"The Hot Chick",
"Step Brothers",
"Tarzan",
"The Pianist",
"The Ring",
"The Rookie",
"The Scream Team",
"Treasure Planet",
"Tru Confessions",
"Two Weeks Notice",
"Winnie the Pooh: A Very Merry Pooh Year",
"21 Grams",
"A Mighty Wind",
"Air Bud: Spikes Back",
"Atlantis: Milo's Return",
"Brother Bear",
"Daredevil",
"Elephant",
"Elf",
"The Apartment",
"George of the Jungle 2",
"Holes",
"Hulk",
"Inspector Gadget 2",
"Love Actually",
"Memories of Murder",
"Mystic River",
"The Avengers",
"Piglet's Big Movie",
"The Big Lebowski",
"Right on Track",
"School of Rock",
"The Cheetah Girls",
"The Dreamers",
"The Even Stevens Movie",
"The Jungle Book 2",
"The Breakfast Club",
"The Return",
"The Young Black Stallion",
"View From the Top",
"The Emperor's New Groove",
"You Wish!",
"13 Going on 30",
"36th Precinct",
"Anchorman: The Legend of Ron Burgundy",
"Around the World in 80 Days",
"Before Sunset",
"Blade: Trinity",
"Confessions of a Teenage Drama Queen",
"Crash",
"The Empire Strikes Back",
"Going to the Mat",
"Halloweentown High",
"Hellboy",
"Home on the Range",
"Howl's Moving Castle",
"Kim Possible: A Sitch in Time",
"The Godfather: Part II",
"The Hangover",
"Mickey's Twice Upon a Christmas",
"Million Dollar Baby",
"Mulan II",
"The Incredibles",
"Night Watch",
"Pixel Perfect",
"Ray",
"Saw",
"The Jungle Book",
"Stuck in the Suburbs",
"The Motorcycle Diaries",
"The Princess Diaries 2: Royal Engagement",
"The Kid",
"The Sea Inside",
"Trilogy: The Weeping Meadow",
"Winnie the Pooh: Springtime With Roo",
"Zenon: Z3",
"A History of Violence",
"Batman Begins",
"Broken Flowers",
"Buffalo Dreams",
"Chicken Little",
"Elektra",
"Fantastic Four",
"Go Figure",
"Greyfriars Bobby",
"The Lion King",
"Herbie Fully Loaded",
"Hustle & Flow",
"Ice Princess",
"Life Is Ruff",
"Lord of War",
"Match Point",
"Memoirs of a Geisha",
"Once Upon a Mattress",
"Pooh's Heffalump Halloween Movie",
"Pooh's Heffalump Movie",
"Sin City",
"Sky High",
"The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
"The Jacket",
"The Pacifier",
"The Proud Family Movie",
"Tiger Cruise",
"Twitches",
"Valiant",
"Walk the Line",
"Wedding Crashers",
"Accepted",
"Air Buddies",
"Apocalypto",
"Babel",
"Bambi II",
"Blood Diamond",
"Brother Bear 2",
"Cars",
"Children of Men",
"Click",
"Cow Belles",
"Day Watch",
"Eight Below",
"Glory Road",
"Goya's Ghosts",
"Grandma's Boy",
"High School Musical",
"Idiocracy",
"Lucky Number Slevin",
"Night at the Museum",
"Pan's Labyrinth",
"Perfume: The Story of a Murderer",
"Read It and Weep",
"Renaissance",
"Return to Halloweentown",
"She's the Man",
"Stick It",
"Stranger Than Fiction",
"The Cheetah Girls 2",
"The Fall",
"The Fountain",
"The Fox and the Hound 2",
"The Lives of Others",
"The Painted Veil",
"The Little Mermaid",
"The Lord of the Rings: The Fellowship of the Ring",
"The Science of Sleep",
"The Wild",
"The Wind That Shakes the Barley",
"This Is England",
"Volver",
"Wendy Wu: Homecoming Warrior",
"X-Men: The Last Stand",
"American Gangster",
"Bridge to Terabithia",
"Cinderella III: A Twist in Time",
"Enchanted",
"Fantastic 4: Rise of the Silver Surfer",
"Fugitive Pieces",
"Ghost Rider",
"High School Musical 2",
"Into the Wild",
"Jump In!",
"Juno",
"Meet the Robinsons",
"The Lord of the Rings: The Return of the King",
"No Country for Old Men",
"Persepolis",
"Pirates of the Caribbean: At World's End",
"The Lord of the Rings: The Two Towers",
"Spider-Man 3",
"Superbad",
"Sweeney Todd: The Demon Barber of Fleet Street",
"The Game Plan",
"The Secret of the Magic Gourd",
"There Will Be Blood",
"Transformers",
"Twitches Too",
"Youth Without Youth",
"Beverly Hills Chihuahua",
"Bolt",
"Camp Rock",
"Cloverfield",
"College Road Trip",
"Hancock",
"High School Musical 3: Senior Year",
"Journey to the Center of the Earth",
"Keith",
"Minutemen",
"Ponyo",
"Punisher: War Zone",
"Red Cliff",
"Snow Buddies",
"The Mummy",
"The Mummy Returns",
"The Cheetah Girls: One World",
"The Dark Knight",
"The Incredible Hulk",
"Tinker Bell",
"WALL·E",
"A Christmas Carol",
"Cloudy With a Chance of Meatballs",
"Dadnapped",
"G-Force",
"Hannah Montana: The Movie",
"Hatching Pete",
"Inglourious Basterds",
"Mary and Max",
"Moon",
"Old Dogs",
"Princess Protection Program",
"Race to Witch Mountain",
"Red Cliff II",
"Santa Buddies",
"Space Buddies",
"Star Trek",
"The Boondock Saints II: All Saints Day",
"The Prestige",
"The Princess and the Frog",
"The Proposal",
"The White Ribbon",
"Tigger & Pooh and a Musical Too",
"Tinker Bell and the Lost Treasure",
"Up",
"Whip It",
"Wizards of Waverly Place: The Movie",
"X-Men Origins: Wolverine",
"Zombieland",
"The Punisher",
"Avalon High",
"Camp Rock 2: The Final Jam",
"Den Brother",
"Easy A",
"The Shaggy Dog",
"The Three Musketeers",
"Iron Man 2",
"Prince of Persia: The Sands of Time",
"Secretariat",
"Shutter Island",
"Tangled",
"The Search for Santa Paws",
"The Secret World of Arrietty",
"Tinker Bell and the Great Fairy Rescue",
"Toy Story 3",
"TRON: Legacy",
"A Separation",
"Beverly Hills Chihuahua 2",
"Bridesmaids",
"Captain America: The First Avenger",
"Cars 2",
"Detachment",
"Geek Charming",
"Ghost Rider: Spirit of Vengeance",
"Good Luck Charlie, It's Christmas!",
"Lemonade Mouth",
"Limitless",
"Mars Needs Moms",
"Mickey's Magical Christmas: Snowed in at the House of Mouse",
"Phineas and Ferb the Movie: Across the 2nd Dimension",
"Pirates of the Caribbean: On Stranger Tides",
"Prom",
"Sharpay's Fabulous Adventure",
"Spooky Buddies",
"The Help",
"The Suite Life Movie",
"The Tree of Life",
"Thor",
"Winnie the Pooh",
"X-Men: First Class",
"21 Jump Street",
"Brave",
"Django Unchained",
"Frankenweenie",
"Frenemies",
"Goon",
"John Carter",
"Journey 2: The Mysterious Island",
"Let It Shine",
"Pitch Perfect",
"Radio Rebel",
"Santa Paws 2: The Santa Pups",
"Sofia the First: Once Upon a Princess",
"The Amazing Spider-Man",
"The Usual Suspects",
"The Wizard of Oz",
"The Campaign",
"The Dark Knight Rises",
"The Odd Life of Timothy Green",
"Treasure Buddies",
"Wreck-It Ralph",
"Frozen",
"Her",
"Iron Man 3",
"Man of Steel",
"Monsters University",
"Oz: The Great and Powerful",
"Planes",
"Snowpiercer",
"Super Buddies",
"Teen Beach Movie",
"The Lone Ranger",
"The Wolf of Wall Street",
"The Wolverine",
"Thor: The Dark World",
"Alexander and the Terrible, Horrible, No Good, Very Bad Day",
"Big Hero 6",
"Cloud 9",
"Edge of Tomorrow",
"Guardians of the Galaxy",
"How to Build a Better Boy",
"Into the Woods",
"Maleficent",
"Million Dollar Arm",
"Muppets Most Wanted",
"Planes: Fire & Rescue",
"The Lego Movie",
"Tinker Bell and the Legend of the Neverbeast",
"Tinker Bell and the Pirate Fairy",
"Whiplash",
"Zapped",
"Bad Hair Day",
"Titanic",
"Descendants",
"Frozen Fever",
"Inside Out",
"Kingsman: The Secret Service",
"Mad Max: Fury Road",
"McFarland, USA",
"Star Wars: The Force Awakens",
"Teen Beach 2",
"The Good Dinosaur",
"Tomorrowland",
"Adventures in Babysitting",
"Alice Through the Looking Glass",
"Finding Dory",
"Hidden Figures",
"Queen of Katwe",
"The BFG",
"The Finest Hours",
"The Swap",
"Zootopia",
"Cars 3",
"Coco",
"Descendants 2",
"Jagga Jasoos",
"Jumanji: Welcome to the Jungle",
"Kong: Skull Island",
"Olaf's Frozen Adventure",
"Pirates of the Caribbean: Dead Men Tell No Tales",
"Split",
"Tangled: Before Ever After",
"The Lego Batman Movie",
"Thor: Ragnarok",
"A Wrinkle in Time",
"Toy Story",
"Mary Poppins Returns",
"Ralph Breaks the Internet",
"Zombies",
"Toy Story 2",
"Descendants 3",
"Dumbo",
"Frozen II",
"Maleficent: Mistress of Evil",
"Star Wars: The Rise of Skywalker",
"Toy Story 4",
"Artemis Fowl",
"Onward",
"Soul",
"Raya and the Last Dragon",
"Inspector Gadget",
"The Princess Diaries",
"101 Dalmations II: Patch's London Adventure",
"20,000 Leagues Under the Sea",
"A Tale of Two Critters",
"Adaptation",
"Agents of SHIELD",
"Amy",
"Apple Dumpling Gang Rides Again",
"Babes in Toyland",
"Basil the Great Mouse Detective",
"Bedknobs and Broomsticks",
"Bedtime Stories",
"Better off Dead",
"Beverly Hills Chihuahua 3: Viva La Fiesta!",
"Castaway Cowboy",
"Chandar, the Black Leopard of Ceylon",
"Chronicles of Narnia: Prince Caspian",
"Dragonslayer",
"Ducktales the Movie: Treasure of the Lost Lamp",
"E",
"Eddie's Million Dollar Cook-Off",
"Emperor's New Groove 2: Kronk's New Groove",
"Escape to Witch Mountain",
"Full-Court Miracle",
"Genius",
"Girl Vs",
"Gotta Kick It Up!",
"H",
"Heavy Weights",
"Hercules",
"Honey, I Blew Up the Kid",
"Hounded",
"I'll Be Home for Christmas",
"In Search of Castaways",
"Invincible",
"Johnny Kapahala: Back on Board",
"Kidnapped",
"Kim Possible Movie: So the Drama",
"Twister",
"Willy Wonka & the Chocolate Factory",
"Lilo and Stitch 2: Stich Has a Glitch",
"Little Mermaid III - Ariel's Beginning",
"Lizzie McGuire Movie",
"Love Leads the Way",
"Lt",
"Make Mine Music",
"Man of the House",
"Midnight Madness",
"X-Men",
"Mrs",
"Mustang",
"My Friends Tigger and Pooh: Super Sleuth Christmas",
"National Lampoon's Animal House",
"Never a Dull Moment",
"No Deposit, No Return",
"Northern Lights",
"Now You See It",
"Ocean's Eleven",
"Oliver and Company",
"Pirates of the Caribbean: At World's End",
"Return to Oz",
"Return to Snowy River",
"Rob Roy: The Highland Rogue",
"Rocket Man",
"Rocketeer",
"Rudyard Kipling's the Jungle Book",
"Run, Cougar, Run",
"Santa Clause 2: The Mrs",
"Santa Clause 3: The Escape Clause",
"Saving Mr",
"Sherlock Jr",
"Smoke",
"Spring, Summer, Fall, Winter",
"Squanto: A Warrior's Tale",
"Star Struck",
"Swiss Family Robinson",
"Teacher's Pet",
"The Adventures of Ichabod and Mr",
"The Biscuit Eater",
"The Black Hole",
"The Computer Wore Tennis Shoes",
"The Devil and Max Devlin",
"The Gospel According to St",
"The Greatest Game Ever Played",
"The Incredible Journey",
"The Lion King 1 1/2",
"The Love Bug",
"The Luck of the Irish",
"The Muppets",
"The Newsies",
"The Parent Trap",
"The Shaggy D",
"X2",
"The Sign of Zorro",
"The Sorcerers Apprentice",
"The Sword and the Rose",
"Young Guns",
"Three Caballeros",
"Tinker Bell: Secret of the Wings",
"Toby Tyler",
"Tower of Terror",
"Treasure of Matecumbe",
"Trenchcoat",
"Tuck Everlasting",
"Twas the Night",
"Under Wraps",
"Underdog",
"Waiting",
"Wall E",
"Watcher in the Woods",
"Where the Toys Come From",
"Whispers: An Elephant's Tale",
"White Fang 2",
"You Lucky Dog",
"The Incredible Hulk",


//Bollywood Movies:


    "Thappad",
    "Dolly Kitty Aur Woh Chamakte Sitare",
    "Raat Akeli Hai",
    "Ludo",
    "Yeh Ballet",
    "Lootcase",
    "Panga",
    "Gunjan Saxena",
    "Jawaani Janeman",
    "Tanhaji",
    "Baaghi 3",
    "Chhapaak",
    "Love Aaj Kal",
    "Shubh Mangal Zyada Saavdhan",
    "Malang",
    "Gully Boy",
    "Article 15",
    "Bala",
    "The Surgical Strike",
    "Sonchiriya",
    "Saand ki Aankh",
    "The Sky is Pink",
    "Chhichhore",
    "Super 30",
    "Mardaani 2",
    "Bharat",
    "Mission Mangal",
    "Housefull 4",
    "Gully Boy",
    "War",
    "Mukkabaaz",
    "Manmarziyaan",
    "Padman",
    "Andhadhun",
    "Sui Dhaga",
    "Badhaai Ho",
    "Raazi",
    "Karwaan",
    "Raid",
    "Blackmail(2018)",
    "Padmavati",
    "Simmba",
    "Hichki",
    "Pad Man",
    "Sanju",
    "Race 3",
    "Lipstick Under My Burkha",
    "Newton",
    "Secret Superstar",
    "Simran",
    "Anaarkali of Aarah",
    "Shubh Mangal Saavdhan",
    "Toilet, Ek Prem Katha",
    "Mom(2017)",
    "Jolly LLB 2",
    "Bareilly ki Barfi",
    "Pink",
    "Kapoor and Sons",
    "Nil Battey Sannata",
    "Udta Punjab",
    "Neerja",
    "Dangal",
    "Aligarh",
    "Dear Zindagi",
    "Dhanak",
    "Wazir",
    "Titli",
    "Masaan",
    "Piku",
    "Dil Dhadakne Do",
    "NH10",
    "Dum Laga Ke Haisha",
    "Baby",
    "Tamasha",
    "Badlapur",
    "Bajirao Mastani",
]





