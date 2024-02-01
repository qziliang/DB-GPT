import React, { useContext, useEffect, useState } from 'react';
import DBIcon from '../common/db-icon';
import CollectIcon from '../icons/collect';
import CollectedIcon from '../icons/collected';
import { Button, Modal, Tag } from 'antd';
import { apiInterceptors, collectApp, delApp, getAppList, newDialogue, unCollectApp } from '@/client/api';
import { IApp } from '@/types/app';
import { DeleteFilled, MessageTwoTone, WarningOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { ChatContext } from '@/app/chat-context';

interface IProps {
  updateApps: () => void;
  app: IApp;
  handleEdit: (app: any) => void;
}

const { confirm } = Modal;

const languageMap = {
  en: '英文',
  zh: '中文',
};

export default function AppCard(props: IProps) {
  const { updateApps, app, handleEdit } = props;
  const { model } = useContext(ChatContext);
  const router = useRouter();

  const [isCollect, setIsCollect] = useState<string>(app.is_collected);

  const { t } = useTranslation();

  const showDeleteConfirm = () => {
    confirm({
      title: t('Tips'),
      icon: <WarningOutlined />,
      content: `do you want delete the application?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await apiInterceptors(delApp({ app_code: app.app_code }));
        updateApps();
      },
    });
  };

  useEffect(() => {
    setIsCollect(app.is_collected);
  }, [app]);

  const collect = async (e: any) => {
    e.stopPropagation();
    const [error] = await apiInterceptors(isCollect === 'true' ? unCollectApp({ app_code: app.app_code }) : collectApp({ app_code: app.app_code }));
    if (error) return;
    updateApps();
    setIsCollect(isCollect === 'true' ? 'false' : 'true');
  };

  const handleChat = async (e: any) => {
    e.stopPropagation();
    const [, res] = await apiInterceptors(newDialogue({ chat_mode: 'chat_agent' }));
    if (res) {
      router.push(`/chat/?scene=chat_agent&id=${res.conv_uid}${model ? `&model=${model}` : ''}`);
    }
  };

  return (
    <div
      onClick={() => {
        handleEdit(app);
      }}
      className="relative cursor-pointer mb-5 max-h-64 flex flex-shrink-0 flex-col p-4 w-72 lg:w-72 rounded  text-black bg-white shadow-[0_8px_16px_-10px_rgba(100,100,100,.08)] hover:shadow-[0_14px_20px_-10px_rgba(100,100,100,.15)] dark:bg-[#232734] dark:text-white dark:hover:border-white transition-[transfrom_shadow] duration-300 hover:-translate-y-1 "
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <DBIcon src={'/LOGO_SMALL.png'} label="1112" className=" mr-1 inline-block mt-[-4px]"></DBIcon>
          <h2 className="text-sm font-semibold">{app?.app_name}</h2>
        </div>
        <div onClick={collect}>{app?.is_collected === 'false' ? <CollectIcon /> : <CollectedIcon />}</div>
      </div>
      <div className="text-sm mt-2 p-6 pt-2 ">
        <p className="font-semibold">简介:</p>
        <p className=" truncate mb-2">{app?.app_describe}</p>
        <div className="flex mb-3">
          <Tag color="#2db7f5" className="text-large">
            {languageMap[app?.language]}
          </Tag>
          <Tag color="#87d068" className="text-large">
            {app?.team_mode}
          </Tag>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          className="mr-4"
          onClick={(e) => {
            e.stopPropagation();
            showDeleteConfirm();
          }}
          icon={<DeleteFilled />}
          danger
          shape="round"
        >
          delete
        </Button>
        <Button size="middle" onClick={handleChat} className="mr-4 dark:text-white mb-2" shape="round" icon={<MessageTwoTone />}>
          {t('Chat')}
        </Button>
      </div>
    </div>
  );
}
