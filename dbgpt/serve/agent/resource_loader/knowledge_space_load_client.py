import json
import logging
from typing import Any, Dict, List, Optional, Tuple, Union

from dbgpt._private.config import Config
from dbgpt.agent.plugin.generator import PluginPromptGenerator
from dbgpt.agent.resource.resource_knowledge_api import ResourceKnowledgeClient
from dbgpt.component import ComponentType
from dbgpt.serve.agent.hub.controller import ModulePlugin
from dbgpt.util.executor_utils import ExecutorFactory, blocking_func_to_async
from dbgpt.util.tracer import root_tracer, trace

CFG = Config()

logger = logging.getLogger(__name__)


class KnowledgeSpaceLoadClient(ResourceKnowledgeClient):
    async def a_get_space_desc(self, space_name) -> str:
        pass

    async def a_get_kn(self, space_name: str, question: Optional[str] = None) -> str:
        pass

    async def add_kn(
        self, space_name: str, kn_name: str, type: str, content: Optional[Any]
    ):
        pass

    async def get_data_introduce(
        self, resource: AgentResource, question: Optional[str] = None
    ) -> str:
        docs = await self.a_get_kn(resource.value, question)
        return "\n".join([doc.content for doc in docs])
