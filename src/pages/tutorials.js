import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import PythonImageUrl from '@site/static/img/assets/python.jpg';
import FlaskImageUrl from '@site/static/img/assets/flask.jpg';
import FletImageUrl from '@site/static/img/assets/flet.jpg';
export default function MyReactPage() {
    const listTutorial = [
        {
            title: 'สอนเขียนภาษาโปรแกรม Python สำหรับผู้เริ่มต้น ฟรี PART 1',
            path: 'https://youtu.be/ryl_fEAkwwI',
            description: 'สอนเขียนภาษาโปรแกรม Python สำหรับผู้เริ่มต้น ฟรี PART 1',
            cover: PythonImageUrl,
            tage: 'python'
        },
        {
            title: 'สร้างเว็บด้วย Python [Flask]',
            path: 'https://www.youtube.com/playlist?list=PLvB7ooH-vPPv4ZR9OdJE7BCy3642XAVXv',
            description: 'สร้างเว็บด้วย Python [Flask] สำหรับผู้เริ่มต้น ฟรี',
            cover: FlaskImageUrl,
            tage: 'flask'
        }
        ,
        {
            title: 'เขียนแอปด้วย flet บน python',
            path: 'https://www.youtube.com/playlist?list=PLvB7ooH-vPPs-7iDax2M3Kid366CJBCAc',
            description: 'เขียนแอปด้วย flet บน python',
            cover: FletImageUrl,
            tage: 'flet'
        }
    ]
    return (
        <Layout>
            <h1 className={styles.textThai + " text-3xl mt-5 text-center"}>การสอนทั้งหมด</h1>
            {
                <div className="flex flex-wrap justify-center m-4 gap-4">
                    {
                        listTutorial.map((item, index) => (
                            <div key={index} class="card card-compact w-96 bg-base-200 shadow-xl border-2 border-base-300 hover:shadow hover:scale-105 transition hover:cursor-pointer hover:border-primary" onClick={() => window.open(item.path)}>
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