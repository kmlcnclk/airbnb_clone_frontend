import React from 'react';
import { Space, Tabs } from 'antd';
import Icon from '../../../src/Icon';
import { BiMenu } from 'react-icons/bi';
import RightSide from './rightSide';
import { useRouter } from 'next/router';

interface HeaderExtraProps {
  setTabValue: Function;
  setClickedButton: Function;
}
// header daki iconu sonra become a host tarafını falan componentlere ayır
const HeaderExtra: React.FC<HeaderExtraProps> = ({
  setTabValue,
  setClickedButton,
}: HeaderExtraProps) => {
  const router = useRouter();

  const tabChangeFunc = (key: string) => {
    if (key === '1') {
      setTabValue('1');
    } else if (key === '2') {
      setTabValue('2');
    } else if (key === '3') {
      router.push('https://www.airbnb.com/s/experiences/online');
    }
    setClickedButton(null);
  };

  return (
    <Space className="!min-w-max pr-[72px] !flex !items-center space-x-44 ">
      <Tabs
        defaultActiveKey="1"
        onChange={tabChangeFunc}
        className="space-x-9 text-lg"
        size="large"
      >
        <Tabs.TabPane tab="Stays" key="1" />
        <Tabs.TabPane tab="Experiences" key="2" />
        <Tabs.TabPane tab="Online Experiences" key="3" />
      </Tabs>
      <div className="flex items-center justify-end">
        <RightSide />
      </div>
    </Space>
  );
};

export default HeaderExtra;
