import styles from './list.module.css'
import { useState } from 'react';
import { data } from "./dados";
const ListColaboradores: React.FC<any> = () => {

  return (
    <section className={styles.containerList}>
        <div className={styles.dados}>
                <ul className={styles.list_dados}>
                            <li style={{width:'40%'}}>Título</li>
                            <li style={{width:'20%'}}>Preço</li>
                            <li style={{width:'20%'}}>Categoria</li>
                            <li style={{width:'20%'}}>Data</li>
                </ul>
                
                {data.map((item:any, index:any) => (
                        <ul key={index} className={styles.list_dados_map}>
                            <li style={{width:'40%' }}>{item.Título}</li>
                            <li style={{width:'20%', color: item.Categoria === "Venda" ? "#33cc95": "red"}}>{item.Preço}</li>
                            <li style={{width:'20%', color: "#9da2b7"}}>{item.Categoria}</li>
                            <li style={{width:'20%', color: "#9da2b7"}}>{item.Data}</li>
                        </ul>
                    ))}
            </div>
    </section>
  );
};

export default ListColaboradores;
