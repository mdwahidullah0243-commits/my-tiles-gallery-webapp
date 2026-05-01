export const navItems = [
    {
        id: 1,
        path: '/',
        content: 'Home'
    },
    {
        id: 2,
        path: '/all-tiles',
        content: 'All Tiles'
    },
    {
        id: 3,
        path: '/my-profile',
        content: 'My Profile'
    }
];

export const copyrightLinks = [
    {
        id: 1,
        content: 'Privacy Policy'
    },
    {
        id: 2,
        content: 'Terms of Service'
    },
    {
        id: 3,
        content: 'Cookies'
    }
];


export const getTiles = async () => {
    const res = await fetch('http://localhost:5000/tiles');
    const data = await res.json();

    return data;
};

export const getTileById = async (id) => {
    const res = await fetch(`http://localhost:5000/tiles/${id}`);
    const data = await res.json();

    return data;
}