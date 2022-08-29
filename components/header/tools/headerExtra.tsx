import React from 'react';
import { Space, Tabs } from 'antd';
import Icon from '../../../src/Icon';
import { BiMenu } from 'react-icons/bi';

interface HeaderExtraProps {
  setTabValue: Function;
}
// header daki iconu sonra become a host tarafını falan componentlere ayır
const HeaderExtra: React.FC<HeaderExtraProps> = ({
  setTabValue,
}: HeaderExtraProps) => {
  const tabChangeFunc = (key: string) => {
    if (key === '1') {
      setTabValue('1');
    } else if (key === '2') {
      setTabValue('2');
    } else if (key === '3') {
      setTabValue('3');
    }
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
        <div className="flex items-center justify-center">
          <button className="bg-white text-[#222] font-semibold hover:bg-[#f7f7f7] px-5 py-3 rounded-full transition-colors duration-200">
            Become a Host
          </button>
          <button className="mr-1 bg-white text-[#222] font-semibold hover:bg-[#f7f7f7] p-4 rounded-full transition-colors duration-200">
            <Icon name="language" size="16" />
          </button>
          <button className="bg-white space-x-2 border border-[#dddddd] hover:shadow-lg px-2 py-1 rounded-full transition-shadow duration-200 flex justify-center items-center">
            <BiMenu size="22" />
            <Icon name="person" size="33" color="#717171" />
          </button>
        </div>
      </div>
    </Space>
  );
};

export default HeaderExtra;
