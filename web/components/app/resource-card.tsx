import { apiInterceptors, getResource } from '@/client/api';
import { DeleteFilled } from '@ant-design/icons';
import { Button, Card, Input, Select, Switch } from 'antd';
import React, { useEffect, useState } from 'react';

interface IProps {
  resourceTypeOptions: any[];
  updateResourcesByIndex: (data: any, index: number) => void;
  index: number;
  resource: any;
}

export default function ResourceCard(props: IProps) {
  const { resourceTypeOptions, updateResourcesByIndex, index, resource: editResource } = props;

  const [resourceType, setResourceType] = useState<string>(resourceTypeOptions[0].label);
  const [resourceValueOptions, setResourceValueOptions] = useState<any[]>([]);
  const [resource, setResource] = useState<any>({
    name: editResource.name,
    type: editResource.type,
    value: editResource.value,
    is_dynamic: editResource.is_dynamic || false,
  });

  const fetchResource = async () => {
    const [_, data] = await apiInterceptors(getResource({ type: resourceType }));
    if (data) {
      setResourceValueOptions(
        data?.map((item) => {
          return { label: item, value: item };
        }),
      );
    } else {
      setResourceValueOptions([]);
    }
  };

  const handleChange = (value: string) => {
    setResourceType(value);
  };

  const updateResource = (value: any, type: string) => {
    const tempResource = resource;

    tempResource[type] = value;
    setResource(tempResource);
    updateResourcesByIndex(tempResource, index);
  };

  const handleDeleteResource = () => {
    updateResourcesByIndex(null, index);
  };

  useEffect(() => {
    fetchResource();
  }, [resourceType]);

  useEffect(() => {
    setResource({ ...resource, value: resourceValueOptions[0]?.label });
  }, [resourceValueOptions]);

  return (
    <Card>
      <div>
        <div className="mb-2 font-bold">资源名</div>
        <Input
          className="mb-5 w-1/2"
          required
          value={resource.name}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateResource(e.target.value, 'name');
          }}
        />
      </div>
      <div className="flex mb-5">
        <div className="w-1/2">
          <div className="mb-2 font-bold">资源类型</div>
          <Select
            defaultValue={resourceTypeOptions[0]}
            className="h-12 w-5/6"
            options={resourceTypeOptions}
            value={resource.type}
            onChange={(value) => {
              updateResource(value, 'type');
              handleChange(value);
            }}
          />
        </div>
        <div className="w-1/2">
          <div className="mb-2 font-bold">参数</div>
          {resourceValueOptions?.length > 0 ? (
            <Select
              value={resource.value}
              className="h-12 w-5/6"
              options={resourceValueOptions}
              onChange={(value) => {
                updateResource(value, 'value');
              }}
            />
          ) : (
            <Input
              className="mb-5 w-11/12"
              value={resource.value}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                updateResource(e.target.value, 'value');
              }}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="mb-2 font-bold">动态</div>
          <Switch
            autoFocus
            defaultChecked={editResource.is_dynamic || false}
            className="mb-5"
            onChange={(value) => {
              updateResource(value, 'is_dynamic');
            }}
          />
        </div>
        <DeleteFilled
          className="text-[#ff1b2e] !text-lg"
          onClick={() => {
            handleDeleteResource();
          }}
        />
      </div>
    </Card>
  );
}
