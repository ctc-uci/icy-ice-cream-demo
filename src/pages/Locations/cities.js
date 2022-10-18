// to-do: add image sources and images to objects
import ny from '../../images/NY.png';
import irv from '../../images/Irvine.png';
import sf from '../../images/SF.png';

const cities = [
    {
        city: 'San Francisco',
        image: sf,
        flavors: [
            {
                flavor: 'Vanilla',
                cal: '250',
                availibility: '12/31/22',
            },
            {
                flavor: 'Mint Chocolate Chip',
                cal: '300',
                availibility: '11/15/22',
            },
            {
                flavor: 'Coffee',
                cal: '220',
                availibility: '11/30/22',
            },
            {
                flavor: 'Neopolitan',
                cal: '320',
                availibility: '11/30/22',
            }
        ]
    },
    {
        city: 'Irvine',
        image: irv,
        flavors: [
            {
                flavor: 'Vanilla',
                cal: '250',
                availibility: '12/31/22',
            },
            {
                flavor: 'Chocolate',
                cal: '300',
                availibility: '11/15/22',
            },
            {
                flavor: 'Cookies and Cream',
                cal: '220',
                availibility: '11/30/22',
            },
            {
                flavor: 'Birthday Cake',
                cal: '320',
                availibility: '11/30/22',
            }
        ]
    },
    {
        city: 'New York',
        image: ny,
        flavors: [
            {
                flavor: 'Vanilla',
                cal: '250',
                availibility: '12/31/22',
            },
            {
                flavor: 'Salted Caramel',
                cal: '300',
                availibility: '11/15/22',
            },
            {
                flavor: 'Strawberry',
                cal: '220',
                availibility: '11/30/22',
            },
            {
                flavor: 'Cookie Dough',
                cal: '320',
                availibility: '11/30/22',
            }
        ]
    }

];

export default cities;