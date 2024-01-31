import logging

from fastapi import APIRouter

from dbgpt._private.config import Config
from dbgpt.agent.agents.agents_manage import agent_manage
from dbgpt.agent.resource.resource_api import ResourceType
from dbgpt.app.knowledge.api import knowledge_space_service
from dbgpt.app.knowledge.request.request import KnowledgeSpaceRequest
from dbgpt.app.openapi.api_view_model import Result
from dbgpt.serve.agent.agents.controller import multi_agents
from dbgpt.serve.agent.db.gpts_app import (
    GptsApp,
    GptsAppCollectionDao,
    GptsAppDao,
    GptsAppQuery,
)
from dbgpt.serve.agent.team.base import TeamMode

CFG = Config()

router = APIRouter()
logger = logging.getLogger(__name__)

gpts_dao = GptsAppDao()
collection_dao = GptsAppCollectionDao()


@router.post("/v1/app/create")
async def create(gpts_app: GptsApp):
    try:
        return Result.succ(gpts_dao.create(gpts_app))
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"create app error: {ex}")


@router.post("/v1/app/list")
async def app_list(query: GptsAppQuery):
    try:
        return Result.succ(gpts_dao.app_list(query))
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"query app error: {ex}")


@router.post("/v1/app/detail")
async def app_list(gpts_app: GptsApp):
    try:
        return Result.succ(gpts_dao.app_detail(gpts_app.app_code))
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"query app error: {ex}")


@router.post("/v1/app/edit")
async def edit(gpts_app: GptsApp):
    try:
        return Result.succ(gpts_dao.edit(gpts_app))
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"edit app error: {ex}")


@router.get("/v1/agents/list")
async def all_agents():
    try:
        return Result.succ(agent_manage.list_agents())
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"query agents error: {ex}")


@router.post("/v1/app/delete", response_model=Result[str])
async def delete(gpts_app: GptsApp):
    try:
        gpts_dao.delete(gpts_app.app_code)
        return Result.succ([])
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"delete app error: {ex}")


@router.post("/v1/app/collect", response_model=Result[str])
async def collect(gpts_app: GptsApp):
    try:
        collection_dao.collect(gpts_app.app_code, gpts_app.user_code, gpts_app.sys_code)
        return Result.succ([])
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"collect app error: {ex}")


@router.post("/v1/app/uncollect", response_model=Result[str])
async def uncollect(gpts_app: GptsApp):
    try:
        collection_dao.uncollect(
            gpts_app.app_code, gpts_app.user_code, gpts_app.sys_code
        )
        return Result.succ([])
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"uncollect app error: {ex}")


@router.get("/v1/team-mode/list")
async def team_mode_list():
    try:
        return Result.succ([mode.value for mode in TeamMode])
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"query team mode list error: {ex}")


@router.get("/v1/resource-type/list")
async def team_mode_list():
    try:
        return Result.succ([type.value for type in ResourceType])
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"query resource type list error: {ex}")


@router.get("/v1/app/resources/list", response_model=Result[str])
async def app_resources(
    type: str, name: str = None, user_code: str = None, sys_code: str = None
):
    """
    Get agent resources, such as db, knowledge, internet, plugin.
    """
    try:
        results = []
        match type:
            case ResourceType.DB.value:
                dbs = CFG.LOCAL_DB_MANAGE.get_db_list()
                results = [db["db_name"] for db in dbs]
                if name:
                    results = [r for r in results if name in r]
            case ResourceType.Knowledge.value:
                knowledge_spaces = knowledge_space_service.get_knowledge_space(
                    KnowledgeSpaceRequest()
                )
                results = [ks.name for ks in knowledge_spaces]
                if name:
                    results = [r for r in results if name in r]
            case ResourceType.Plugin.value:
                agents = multi_agents.get_dbgpts()
                results = [agent.gpts_name for agent in agents]
                if name:
                    results = [r for r in results if name in r]
            case ResourceType.Internet.value:
                results = []
        return Result.succ(results)
    except Exception as ex:
        return Result.failed(code="E000X", msg=f"query app resources error: {ex}")
