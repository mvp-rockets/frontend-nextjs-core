import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Text from './Text' 

const VerticalMenu = ({ menuItems = [], listMainClass, listItemClass, ...properties }) => {
	return (
		<nav>
			<ul className={`flex flex-col space-y-2 ${listMainClass}`}>
				{menuItems.map((menu, index) => (
                    <Link href={'/'}>
                        <li key={index} className={`px-4 pt-2 pb-3 rounded hover:bg-neutral-100 ${menu.isActive && 'bg-neutral-100'} transition-all ease-in-out duration-700 ${listItemClass}`}>
                            <Text variant='bodySmall'
                                  className={`cursor-pointer ${properties.className}`} >
                                  {menu.title}
                            </Text>
                         </li>
                    </Link>
				))}
			</ul>
		</nav >
	)
}

export default VerticalMenu;

VerticalMenu.propTypes = {
    className: PropTypes.string,
    listMainClass: PropTypes.string,
    listItemClass:  PropTypes.string,
    menuItems: PropTypes.array,
};