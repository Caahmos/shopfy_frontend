interface DropdownProps {
    id: number,
    name: string,
    link: string
}

export const DropdownItems: DropdownProps[] = [
    {
        id: 1,
        name: 'Home',
        link: '/home'
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '/top'
    },
    {
        id: 3,
        name: 'Kids Wear',
        link: '/kids'
    },
    {
        id: 4,
        name: 'Mens Wear',
        link: '/mens'
    },
    {
        id: 5,
        name: 'Women Wear',
        link: '/women'
    },
]