import React from 'react';
import './home.scss';
import {Chart1} from '../components/Chart1';
import {Chart2} from '../components/Chart2';
import {Chart3} from '../components/Chart3';
import {Chart4} from '../components/Chart4';
import {Chart5} from '../components/Chart5';
import {Chart7} from '../components/Chart7';
import {Chart8} from '../components/chart8';
import {Statistic} from '../components/Statistic';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <p>来宾市农产品数据可视化平台</p>
        <div className="left">
          2021年8月25日
          16:04:61
          28℃ cloudy
        </div>
        <div className="right">请选择想要查看的产品</div>
      </header>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart5/>
          <Chart2/>
        </section>
        <section className="section2">
          <Statistic/>
          <Chart4/>
          <Chart8/>
          <div className="ring">
            <div className="radar"/>
          </div>
          <span>数据实时监控中</span>
        </section>
        <section className="section3">
          <Chart3/>
          <Chart7/>
        </section>
      </main>
      <footer>
        &copy; 来宾市农产品数据可视化平台 &copy; 2021-2022
      </footer>
    </div>
  );
};
