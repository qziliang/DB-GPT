import { IFlowNode, IFlowNodeParameter } from '@/types/flow';
import { Checkbox, Input, InputNumber, Tooltip } from 'antd';
import React from 'react';
import RequiredIcon from './required-icon';
import NodeHandler from './node-handler';
import { InfoCircleOutlined } from '@ant-design/icons';

interface NodeParamHandlerProps {
  node: IFlowNode;
  data: IFlowNodeParameter;
  label: 'inputs' | 'outputs' | 'parameters';
  index: number; // index of array
}

// render node parameters item
const NodeParamHandler: React.FC<NodeParamHandlerProps> = ({ node, data, label, index }) => {
  function handleChange(value: any) {
    data.value = value;
  }

  if (data.category === 'resource') {
    return <NodeHandler node={node} data={data} type="target" label={label} index={index} />;
  } else if (data.category === 'common') {
    const defaultValue = data.value !== null && data.value !== undefined ? data.value : data.default;
    switch (data.type_name) {
      case 'int':
        return (
          <div className="p-2 text-sm">
            <p>
              {data.label}:<RequiredIcon optional={data.optional} />
              {data.description && (
                <Tooltip title={data.description}>
                  <InfoCircleOutlined className="ml-2 cursor-pointer" />
                </Tooltip>
              )}
            </p>
            <InputNumber
              className="w-full"
              defaultValue={defaultValue}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </div>
        );
      case 'str':
        return (
          <div className="p-2 text-sm">
            <p>
              {data.label}:<RequiredIcon optional={data.optional} />
              {data.description && (
                <Tooltip title={data.description}>
                  <InfoCircleOutlined className="ml-2 cursor-pointer" />
                </Tooltip>
              )}
            </p>
            <Input
              className="w-full"
              defaultValue={defaultValue}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </div>
        );
      case 'bool':
        return (
          <div className="p-2 text-sm">
            <p>
              {data.label}:<RequiredIcon optional={data.optional} />
              {data.description && (
                <Tooltip title={data.description}>
                  <InfoCircleOutlined className="ml-2 cursor-pointer" />
                </Tooltip>
              )}
              <Checkbox
                className="ml-2"
                defaultChecked={defaultValue}
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              />
            </p>
          </div>
        );
    }
  }
};

export default NodeParamHandler;