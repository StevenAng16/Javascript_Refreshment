
//Object

/*
const user = {
    id : 42,
    is_verified : true
};
const {id, is_verified} = user;
console.log(id); //42
console.log(is_verified); //true
*/


const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'Javascript-Umgebung' 
        }
    ],
    url: '/en-US/docs/Tools,Scratchpad'
};
let{
    title: englishTitle, //rename
    translations: [
        {
            title: localeTitle, //rename
        },
    ],
} = metadata;
console.log(englishTitle); //"Scratchpad"
console.log(localeTitle); //"Javascript-Umgebung"