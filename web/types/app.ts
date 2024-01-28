// app
export type IApp = {
  /**
   * 应用名
   */
  app_name: string;
  /**
   * 应用描述信息/简介
   */
  app_describe: string;
  /**
   * 语言/prompt关联
   */
  language: string;
  /**
   * 组织模式（AutoPlan/LayOut）
   */
  team_mode: string;
  /**
   * 组织上下文/ None
   */
  team_context: string;
  /**
   * 应用节点信息
   */
  details?: string;
};

// agent
export type IAgent = {
  agent_name: string;
  node_id: string;
  /**
   * Agent绑定的资源
   */
  resources: string;
  /**
   * Agent的绑定模板
   */
  prompt_template: string;
  /**
   * llm的使用策略，默认是priority
   */
  llm_strategy: string;
  /**
   * 策略包含的参数
   */
  llm_strategy_value: string;
};
