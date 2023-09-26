const movies = [
    {title: 'a', year: 2018, rating: 4.5 },
    {title: 'b', year: 2018, rating: 4.7 },
    {title: 'c', year: 2018, rating: 3 },
    {title: 'd', year: 2017, rating: 4.5 },
]


const filter = movies.filter((element) => (element.year === 2018 && element.rating>=4))
                    .sort((x,y) => x.rating - y.rating )
                    .reverse()
                    .map(v => v.title)


console.log(filter);

