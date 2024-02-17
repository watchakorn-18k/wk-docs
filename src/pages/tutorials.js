import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function MyReactPage() {
    const listTutorial = [
        {
            title: 'Python',
            path: '/docs/pythons/intro',
            description: 'การสอน Python',
            cover: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg',
            tage: 'python'
        }
    ]
    return (
        <Layout>
            <h1 className={styles.textThai + " text-3xl mt-5 text-center"}>การสอนทั้งหมด</h1>
            {
                <div className="flex flex-wrap justify-center m-4">
                    {
                        listTutorial.map((item, index) => (
                            <div key={index} class="card card-compact w-96 bg-base-200 shadow-xl border-2 border-base-300">
                                <figure><img src={item.cover} className='object-cover w-full h-48' alt={item.title} /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">{item.title}</h2>
                                    <p>{item.description}</p>
                                    <p>Tage : <div class="badge badge-neutral">{item.tage}</div></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </Layout>
    );
}