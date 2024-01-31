/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: "doc", 
      id: "overview",
      label: "Overview"
    },

    {
      type: "doc", 
      id: "quickstart",
      label: "Quickstart",
      
    },

    {
      type: "category", 
      label: "AWEL(Agentic Workflow Expression Language)",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: "awel/awel"
        },
        {
          type: 'doc',
          id: "awel/get_started"
        },
        {
          type: "doc",
          id: "awel/why_use_awel" 
        },
        {
          type: "category",
          label: "How to",
          items: [
            {
              type: "category",
              label: "Operator",
              collapsed: false,
              collapsible: false,
              items: [
                {
                  type: "doc",
                  id: "awel/how_to/operator/map"
                },
                {
                  type: "doc",
                  id: "awel/how_to/operator/join"
                },
                {
                  type: "doc",
                  id: "awel/how_to/operator/reduce"
                },
                {
                  type: "doc",
                  id: "awel/how_to/operator/trigger"
                },
                {
                  type: "doc",
                  id: "awel/how_to/operator/streamify_abs_operator"
                }
              ]
            },
            {
              type: "category",
              label: "Workflow",
              collapsed: false,
              collapsible: false,
              items: [
                {
                  type: "doc",
                  id: "awel/how_to/workflow/dag_pipeline"
                }
              ]
            }
          ]
        },
        {
          type: "category",
          label: "Cookbook",
          items: [
            {
              type: "doc",
              id: "awel/cookbook/quickstart_basic_awel_workflow"
            },
            {
              type: "doc",
              id: "awel/cookbook/sql_awel_use_rag_and_schema_linking"
            },
            {
              type: "doc",
              id: "awel/cookbook/data_analysis_use_awel"
            },
            {
              type: "doc",
              id: "awel/cookbook/multi_round_chat_withllm"
            },
          ],
          link: {
            type: 'generated-index',
            description: 'Example code for accomplishing common workflow with the Agentic Workflow Expression Language (AWEL). These examples show how to build  different app use LLMs (the core AWEL interface) and dbgpt modules.',
            slug: "cookbook"
          },
        }
      ],
      link: {
        type: 'generated-index',
        description: "AWEL (Agentic Workflow Expression Language) is an intelligent agent workflow expression language specifically designed for the development of large-model applications",
      },
    },

    {
      type: "category",
      label: "Installation",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'installation/sourcecode',
        },
        {
          type: 'doc',
          id: 'installation/docker',
        },
        {
          type: 'doc',
          id: 'installation/docker_compose',
        },
        {
          type: 'category',
          label: 'Model Service Deployment',
          items: [
            {
              type: 'doc',
              id: 'installation/model_service/stand_alone',
            },
            {
              type: 'doc',
              id: 'installation/model_service/cluster',
            },
          ],
        },
        {
          type: 'category',
          label: 'Adanced Usage',
          items: [
            {
              type: 'doc',
              id: 'installation/advanced_usage/vLLM_inference',
            },
            {
              type: 'doc',
              id: 'installation/advanced_usage/OpenAI_SDK_call',
            },
          ],
        },


      ],
      link: {
        type: 'generated-index',
        description: 'DB-GPT provides a wealth of installation and deployment options, supporting source code deployment, Docker deployment, cluster deployment and other modes. At the same time, it can also be deployed and installed based on the AutoDL image.',
        slug: "installation",
      },
    },

    {
      type: "category",
      label: "Application",
      collapsed: false,
      collapsible: false,
      items: [

        {
          type: 'category',
          label: 'Getting Started Tutorial',
          items: [
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_knowledge',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_data',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_excel',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_db',
            },
            {
              type: 'doc',
              id: 'application/started_tutorial/chat_dashboard',
            },
            {
              type: "category",
              label: "Agents",
              items: [
                {
                  type: 'doc',
                  id: 'application/started_tutorial/agents/plugin',
                },
                {
                  type: "doc",
                  id: "application/started_tutorial/agents/db_data_analysis_agents",
                },
                {
                  type: "doc",
                  id: "application/started_tutorial/agents/crawl_data_analysis_agents",
                }
              ],
              link: {
                type: 'generated-index',
                slug: "agents",
              },
            }
          ],
        },
        {
          type: 'category',
          label: 'Advanced Tutorial',
          items: [
            {
              type: 'doc',
              id: 'application/advanced_tutorial/rag',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/smmf',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/cli',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/api',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/debugging',
            },
          ],
        },
        {
          type: 'category',
          label: 'Fine Tuning Manual',
          items: [
            {
              type: 'doc',
              id: 'application/fine_tuning_manual/text_to_sql',
            },
            {
              type: 'doc',
              id: 'application/fine_tuning_manual/dbgpt_hub',
            },
          ],
        },
      ],
      link: {
        type: 'generated-index',
        slug: "application",
      },
    },

    {
      type: "category",
      label: "Modules",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'modules/smmf',
        },
        {
          type: 'doc',
          id: 'modules/rag',
        },
        {
          type: 'doc',
          id: 'modules/agent',
        },
        {
          type: 'doc',
          id: 'modules/fine_tuning',
        },
        {
          type: 'doc',
          id: 'modules/eval',
        },
        {
          type: 'doc',
          id: 'modules/connections',
        },
        {
          type: 'doc',
          id: 'modules/visual',
        },
        
      ],
      link: {
        type: 'generated-index',
        slug: "modules",
      },
    },

    {
      type: "category",
      label: "FAQ",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'faq/install',
        }
        ,{
          type: 'doc',
          id: 'faq/llm',
        }
        ,{
          type: 'doc',
          id: 'faq/kbqa',
        }
      ],
    },
    
    {
      type: "category",
      label: "ChangeLog",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'changelog/doc',
        },
      ],
  
    },

    {
      type: "doc", 
      id: "use_cases",
      label: "Use Cases"
    },
  ]
};


module.exports = sidebars;
