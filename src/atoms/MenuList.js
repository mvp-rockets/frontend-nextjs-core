import PropTypes from 'prop-types';

const MenuList = ({ menuItem = [], className, ...properties }) => {
  return (
    // <nav>
    //   <ul className={`flex space-x-10`}>
    //     {menuItem.map((menu, index) => (
    //       <li key={index}>
    //         <Link href={menu.href}> 
    //           <a className={`cursor-pointer hover:text-primary-900 transition-all ease-in-out duration-700 ${menu.isActive ? 'text-primary-900' : ''} ${properties.className}`}>
    //             <Text variant='bodySmall'>{menu.title}</Text>
    //           </a>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>


<ul className="w-full flex">
  <li className="px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide"><a>Non-Dropdown</a></li>
  
  <li className="group  relative dropdown  px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
        <a>Dropdown</a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">

        <ul className="top-0 w-48 bg-white shadow px-6 py-8">
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
            <li className="py-1"><a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
        </ul>
        </div>
    </li>
    <li className="px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide"><a>Non-Dropdown</a></li>
    <li className="px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide"><a>Non-Dropdown</a></li>
    <li className="px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide lg:pr-8"><a>Non-Dropdown</a></li>
</ul>


  );
};

export default MenuList;

MenuList.propTypes = {
  className: PropTypes.string,
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
};

MenuList.defaultProps = {
    className: '',
    menuItem : [],
  };
