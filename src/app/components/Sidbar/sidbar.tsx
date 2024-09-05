import { useState } from 'react';
import styles from './sidebar.module.css';
import MenuItem from './menuItem';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
          <header>
            Logo
          </header>
          
          <menu>
            <MenuItem title="Item 1" submenu={['Subitem 1.1', 'Subitem 1.2']} />
            <MenuItem title="Item 2" submenu={['Subitem 2.1', 'Subitem 2.2']} />
            <MenuItem title="Item 3" submenu={['Subitem 3.1', 'Subitem 3.2']} />
          </menu>

          <footer>
            <div>
              <div>
                <div>imagem</div>
                <div>
                  <span>Usuario123</span>
                  <span>Admin</span>
                </div>
              </div>

              <div>
                <button>Settings</button>
                <button>logout</button>
              </div>
            </div>
          </footer>
          
        </div>
    );
};

export default Sidebar;
