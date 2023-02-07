/**** With Single User */

// const database = [
//     {
//         username: 'Shirley',
//         password: '12345'

//     },
// ]

// const timeline = [
//     {
//         username: 'Shirley',
//         status:'Christmas is around the corner😛'
//     },
//     {
//         username: 'Tunde',
//         status:'I dey H ooo'
//     },
//     {
//         username: 'Chinedu',
//         status:'Ronaldo is the GOAT 🐐'
//     },
//     {
//         username: 'Pauline',
//         status:'Messi is the assistant GOAT'
//     }
// ]

// const usernamePrompt = prompt('Enter your username');
// const passwordPrompt = prompt('Enter your password');

// function signIn(username, password) {
//     if(username === database[0].username && password === database[0].password) {
//         console.log(timeline);
//     } else {
//         alert('Wrong username or password!');
//     }
// }

// signIn(usernamePrompt, passwordPrompt);


/**** With Multiple Users */

const database = [
    {
        username: 'Shirley',
        password: '12345'

    },
    {
        username: 'Semilore',
        password: '1245'

    },
    {
        username: 'Smith',
        password: 'pringles'

    },
    {
        username: 'Chidubem',
        password: 'aye345'

    },
    {
        username: 'Blessing',
        password: 'juksy'

    },
    {
        username: 'Mubarak',
        password: 'sheik'

    },
    {
        username: 'Spencer',
        password: 'matthew'

    },
    {
        username: 'Bruyne',
        password: 'assister'

    },
    {
        username: 'Pearson',
        password: 'jessy'

    },
    {
        username: 'Akinyele',
        password: 'ngoo3867'

    },
]

const timeline = [
    {
        username: 'Shirley',
        status:'Christmas is around the corner😛'
    },
    {
        username: 'Tunde',
        status:'I dey H ooo'
    },
    {
        username: 'Chinedu',
        status:'Ronaldo is the GOAT 🐐'
    },
    {
        username: 'Pauline',
        status:'Messi is the assistant GOAT'
    }
]

const usernamePrompt = prompt('Enter your username');
const passwordPrompt = prompt('Enter your password');



function signIn(username, password) {

    function userValidation(username, password) {
        for(i = 0; i < database.length; i++) {
            if(username === database[i].username && password === database[i].password) {
                return true;
            }
        }
        return false;
    }
     if(userValidation(username, password)) {
        console.log(timeline);
     } else {
            alert('Wrong username or password!');
        }
}


signIn(usernamePrompt, passwordPrompt);
















//JAVASCRIPT KEYWORDS
/***
 * break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
 */
