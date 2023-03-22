import React, {useEffect, useState} from 'react';

export const Statistic = () => {
  const [num1, setNum1] = useState('6564.03');
  const [num2, setNum2] = useState('9863.32');
  useEffect(() => {
    setInterval(() => {
      setNum1(n => {
        const arr1 = n.split('');
        arr1.splice(4, 1);
        const arr2 = (parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(4, 0, '.');
        return arr2.join('');
      });
    }, 100);
    setInterval(() => {
      setNum2(n => {
        const arr1 = n.split('');
        arr1.splice(4, 1);
        const arr2 = (parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(4, 0, '.');
        return arr2.join('');
      });
    }, 100);
  }, []);
  return (
    <div className="formWrapper">
      <div>年量产(单位：万吨)<p>{num1}</p></div>
      <div>年销售额(单位：万元)<p>{num2}</p></div>
      <div>平均价(单位：元/斤)<p>5.99</p></div>
      <div>年销售额相比去年<p>23</p></div>
    </div>
  );
};