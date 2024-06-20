import React from 'react';

interface DrawerProps {
    isOpen: boolean;
    toggleDrawer: () => void;
    children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer, children }) => {
    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 bg-grays-dark overflow-y-auto z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4">
                <button onClick={ () => toggleDrawer} className="absolute top-2 right-2 text-white py-1 px-2">X</button>
                <div className="mt-8">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Drawer;