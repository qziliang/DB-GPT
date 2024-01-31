import json
import uuid
from datetime import datetime
from typing import Any, Dict, List, Optional

from pydantic import BaseModel
from sqlalchemy import (
    Column,
    DateTime,
    Integer,
    String,
    Text,
    UniqueConstraint,
)

from dbgpt.agent.agents.resource import AgentResource, dataclass_to_dict, json_to_agent_resource_list
from dbgpt.storage.metadata import BaseDao, Model


class GptsAppDetail(BaseModel):
    app_code: Optional[str] = None
    app_name: Optional[str] = None
    agent_name: Optional[str] = None
    node_id: Optional[str] = None
    resources: Optional[list[AgentResource]] = None
    prompt_template: Optional[str] = None
    llm_strategy: Optional[str] = None
    llm_strategy_value: Optional[str] = None
    created_at: datetime = datetime.now()
    updated_at: datetime = datetime.now()

    def to_dict(self):
        return {k: self._serialize(v) for k, v in self.__dict__.items()}

    def _serialize(self, value):
        if isinstance(value, BaseModel):
            return value.to_dict()
        elif isinstance(value, list):
            return [self._serialize(item) for item in value]
        elif isinstance(value, dict):
            return {k: self._serialize(v) for k, v in value.items()}
        else:
            return value

    @classmethod
    def from_dict(cls, d: Dict[str, Any]):
        return cls(
            app_code=d["app_code"],
            app_name=d["app_name"],
            agent_name=d["agent_name"],
            node_id=d["node_id"],
            resources=d.get("resources", None),
            prompt_template=d.get("prompt_template", None),
            llm_strategy=d.get("llm_strategy", None),
            llm_strategy_value=d.get("llm_strategy_value", None),
            created_at=d.get("created_at", None),
            updated_at=d.get("updated_at", None),
        )

    @classmethod
    def from_entity(cls, entity):
        resources = json_to_agent_resource_list(entity.resources)
        return cls(
            app_code=entity.app_code,
            app_name=entity.app_name,
            agent_name=entity.agent_name,
            node_id=entity.node_id,
            resources=resources,
            prompt_template=entity.prompt_template,
            llm_strategy=entity.llm_strategy,
            llm_strategy_value=entity.llm_strategy_value,
            created_at=entity.created_at,
            updated_at=entity.updated_at,
        )


class GptsApp(BaseModel):
    app_code: Optional[str] = None
    app_name: Optional[str] = None
    app_describe: Optional[str] = None
    team_mode: Optional[str] = None
    language: Optional[str] = None
    team_context: Optional[str] = None
    user_code: Optional[str] = None
    sys_code: Optional[str] = None
    is_collected: Optional[str] = None
    created_at: datetime = datetime.now()
    updated_at: datetime = datetime.now()
    details: List[GptsAppDetail] = []

    def to_dict(self):
        return {k: self._serialize(v) for k, v in self.__dict__.items()}

    def _serialize(self, value):
        if isinstance(value, BaseModel):
            return value.to_dict()
        elif isinstance(value, list):
            return [self._serialize(item) for item in value]
        elif isinstance(value, dict):
            return {k: self._serialize(v) for k, v in value.items()}
        else:
            return value

    @classmethod
    def from_dict(cls, d: Dict[str, Any]):
        return cls(
            app_code=d.get("app_code", None),
            app_name=d["app_name"],
            app_describe=d["app_describe"],
            team_mode=d["team_mode"],
            team_context=d.get("team_context", None),
            user_code=d.get("user_code", None),
            sys_code=d.get("sys_code", None),
            is_collected=d.get("is_collected", None),
            created_at=d.get("created_at", None),
            updated_at=d.get("updated_at", None),
            details=d.get("details", None),
        )


class GptsAppQuery(GptsApp):
    page_size: int = 10
    page_no: int = 1
    is_collected: Optional[str] = None


class GptsAppCollection(BaseModel):
    app_code: Optional[str] = None
    user_code: Optional[str] = None
    sys_code: Optional[str] = None

    def to_dict(self):
        return {k: self._serialize(v) for k, v in self.__dict__.items()}

    def _serialize(self, value):
        if isinstance(value, BaseModel):
            return value.to_dict()
        elif isinstance(value, list):
            return [self._serialize(item) for item in value]
        elif isinstance(value, dict):
            return {k: self._serialize(v) for k, v in value.items()}
        else:
            return value

    @classmethod
    def from_dict(cls, d: Dict[str, Any]):
        return cls(
            app_code=d.get("app_code", None),
            user_code=d.get("user_code", None),
            sys_code=d.get("sys_code", None),
            created_at=d.get("created_at", None),
            updated_at=d.get("updated_at", None),
        )


class GptsAppCollectionEntity(Model):
    __tablename__ = "gpts_app_collection"
    id = Column(Integer, primary_key=True, comment="autoincrement id")
    app_code = Column(String(255), nullable=False, comment="Current AI assistant code")
    user_code = Column(String(255), nullable=True, comment="user code")
    sys_code = Column(String(255), nullable=True, comment="system app code")
    created_at = Column(DateTime, default=datetime.utcnow, comment="create time")
    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        comment="last update time",
    )


class GptsAppEntity(Model):
    __tablename__ = "gpts_app"
    id = Column(Integer, primary_key=True, comment="autoincrement id")
    app_code = Column(String(255), nullable=False, comment="Current AI assistant code")
    app_name = Column(String(255), nullable=False, comment="Current AI assistant name")
    app_describe = Column(
        String(2255), nullable=False, comment="Current AI assistant describe"
    )
    language = Column(String(100), nullable=False, comment="gpts language")
    team_mode = Column(String(255), nullable=False, comment="Team work mode")
    team_context = Column(
        Text,
        nullable=True,
        comment="The execution logic and team member content that teams with different working modes rely on",
    )

    user_code = Column(String(255), nullable=True, comment="user code")
    sys_code = Column(String(255), nullable=True, comment="system app code")

    created_at = Column(DateTime, default=datetime.utcnow, comment="create time")
    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        comment="last update time",
    )

    __table_args__ = (UniqueConstraint("app_name", name="uk_gpts_app"),)


class GptsAppDetailEntity(Model):
    __tablename__ = "gpts_app_detail"
    id = Column(Integer, primary_key=True, comment="autoincrement id")
    app_code = Column(String(255), nullable=False, comment="Current AI assistant code")
    app_name = Column(String(255), nullable=False, comment="Current AI assistant name")
    agent_name = Column(String(255), nullable=False, comment=" Agent name")
    node_id = Column(
        String(255), nullable=False, comment="Current AI assistant Agent Node id"
    )
    resources = Column(Text, nullable=True, comment="Agent bind  resource")
    prompt_template = Column(Text, nullable=True, comment="Agent bind  template")
    llm_strategy = Column(String(25), nullable=True, comment="Agent use llm strategy")
    llm_strategy_value = Column(
        Text, nullable=True, comment="Agent use llm strategy value"
    )
    created_at = Column(DateTime, default=datetime.utcnow, comment="create time")
    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        comment="last update time",
    )

    __table_args__ = (
        UniqueConstraint(
            "app_name", "agent_name", "node_id", name="uk_gpts_app_agent_node"
        ),
    )

    def to_dict(self):
        return {k: self._serialize(v) for k, v in self.__dict__.items()}

    def _serialize(self, value):
        if isinstance(value, BaseModel):
            return value.to_dict()
        elif isinstance(value, list):
            return [self._serialize(item) for item in value]
        elif isinstance(value, dict):
            return {k: self._serialize(v) for k, v in value.items()}
        else:
            return value


class GptsAppCollectionDao(BaseDao):
    def collect(self, app_code: str, user_code: Optional[str] = None, sys_code: Optional[str] = None):
        with self.session() as session:
            app_entity = GptsAppCollectionEntity(
                app_code=app_code,
                user_code=user_code,
                sys_code=sys_code,
            )
            session.add(app_entity)

    def uncollect(self, app_code: str, user_code: Optional[str] = None, sys_code: Optional[str] = None):
        with self.session() as session:
            app_qry = session.query(GptsAppCollectionEntity)
            if user_code:
                app_qry = app_qry.filter(GptsAppCollectionEntity.user_code == user_code)
            if sys_code:
                app_qry = app_qry.filter(GptsAppCollectionEntity.sys_code == sys_code)
            if app_code:
                app_qry = app_qry.filter(GptsAppCollectionEntity.app_code == app_code)
            app_entity = app_qry.one_or_none()
            if app_entity:
                session.delete(app_entity)
                session.commit()

    def list(self, query: GptsAppCollection):
        with self.session() as session:
            app_qry = session.query(GptsAppCollectionEntity)
            if query.user_code:
                app_qry = app_qry.filter(GptsAppCollectionEntity.user_code == query.user_code)
            if query.sys_code:
                app_qry = app_qry.filter(GptsAppCollectionEntity.sys_code == query.sys_code)
            if query.app_code:
                app_qry = app_qry.filter(GptsAppCollectionEntity.app_code == query.app_code)
            res = app_qry.all()
            session.close()
            return res


class GptsAppDao(BaseDao):
    def app_list(
        self,
        query: GptsAppQuery
    ):
        app_codes = []
        if query.is_collected and query.is_collected.lower() in ("true", "false"):
            collection_dao = GptsAppCollectionDao()
            gpts_collections = collection_dao.list(
                GptsAppCollection.from_dict({"sys_code": query.sys_code, "user_code": query.user_code}))
            app_codes = [gc.app_code for gc in gpts_collections]

        with self.session() as session:
            app_qry = session.query(GptsAppEntity)
            if query.app_name:
                app_qry = app_qry.filter(GptsAppEntity.app_name.like(f"%{query.app_name}%"))
            if query.user_code:
                app_qry = app_qry.filter(GptsAppEntity.user_code == query.user_code)
            if query.sys_code:
                app_qry = app_qry.filter(GptsAppEntity.sys_code == query.sys_code)
            if query.is_collected and query.is_collected.lower() in ("true", "false"):
                app_qry = app_qry.filter(GptsAppEntity.app_code.in_(app_codes))
            app_qry = app_qry.order_by(
                GptsAppEntity.id.desc()
            )
            app_qry = app_qry.offset((query.page_no - 1) * query.page_size).limit(
                query.page_size
            )
            results = app_qry.all()
            apps = []
            for app_info in results:
                apps.append(GptsApp.from_dict(
                    {
                        "app_code": app_info.app_code,
                        "app_name": app_info.app_name,
                        "app_describe": app_info.app_describe,
                        "team_mode": app_info.team_mode,
                        "team_context": app_info.team_context,
                        "user_code": app_info.user_code,
                        "sys_code": app_info.sys_code,
                        "is_collected": query.is_collected,
                        "created_at": app_info.created_at,
                        "updated_at": app_info.updated_at,
                        "details": [],
                    }
                ))
            return apps

    def app_detail(self, app_code: str):
        with self.session() as session:
            app_qry = session.query(GptsAppEntity)
            app_qry.filter(GptsAppEntity.app_code == app_code)
            app_info = app_qry.first()

            app_detail_qry = session.query(GptsAppDetailEntity).filter(
                GptsAppDetailEntity.app_code == app_code
            )
            app_details = app_detail_qry.all()

            details = [GptsAppDetail.from_entity(entity) for entity in app_details]

            return GptsApp.from_dict(
                {
                    "app_code": app_info.app_code,
                    "app_name": app_info.app_name,
                    "app_describe": app_info.app_describe,
                    "team_mode": app_info.team_mode,
                    "team_context": app_info.team_context,
                    "user_code": app_info.user_code,
                    "sys_code": app_info.sys_code,
                    "created_at": app_info.created_at,
                    "updated_at": app_info.updated_at,
                    "details": details,
                }
            )

    def delete(self, app_code: str):
        with self.session() as session:
            app_qry = session.query(GptsAppEntity)
            app_qry.filter(GptsAppEntity.app_code == app_code)
            app_qry.delete()

    def create(self, gpts_app: GptsApp):
        with self.session() as session:
            app_entity = GptsAppEntity(
                app_code=str(uuid.uuid1()),
                app_name=gpts_app.app_name,
                app_describe=gpts_app.app_describe,
                team_mode=gpts_app.team_mode,
                team_context=gpts_app.team_context,
                language=gpts_app.language,
                user_code=gpts_app.user_code,
                sys_code=gpts_app.sys_code,
                created_at=gpts_app.created_at,
                updated_at=gpts_app.updated_at,
            )
            session.add(app_entity)

            app_details = []
            for item in gpts_app.details:
                resource_dicts = [dataclass_to_dict(resource) for resource in item.resources]

                app_details.append(
                    GptsAppDetailEntity(
                        app_code=app_entity.app_code,
                        app_name=app_entity.app_name,
                        agent_name=item.agent_name,
                        node_id=str(uuid.uuid1()),
                        resources=json.dumps(resource_dicts, ensure_ascii=False),
                        prompt_template=item.prompt_template,
                        llm_strategy=item.llm_strategy,
                        llm_strategy_value=item.llm_strategy_value,
                        created_at=item.created_at,
                        updated_at=item.updated_at,
                    )
                )
            session.add_all(app_details)
            gpts_app.app_code = app_entity.app_code
            return gpts_app

    def edit(self, gpts_app: GptsApp):
        with self.session() as session:
            app_qry = session.query(GptsAppEntity)
            if gpts_app.app_code is None:
                raise f"app_code is None, don't allow to edit!"
            app_qry.filter(GptsAppEntity.app_code == gpts_app.app_code)
            app_entity = app_qry.one()
            session.merge(app_entity)

            old_details = session.query(GptsAppDetailEntity).filter(
                GptsAppDetailEntity.app_code == gpts_app.app_code
            )
            old_details.delete()
            session.commit()

            app_details = []
            for item in gpts_app.details:
                resource_dicts = [dataclass_to_dict(resource) for resource in item.resources]
                app_details.append(
                    GptsAppDetailEntity(
                        app_code=gpts_app.app_code,
                        app_name=gpts_app.app_name,
                        agent_name=item.agent_name,
                        node_id=str(uuid.uuid1()),
                        resources=json.dumps(resource_dicts, ensure_ascii=False),
                        prompt_template=item.prompt_template,
                        llm_strategy=item.llm_strategy,
                        llm_strategy_value=item.llm_strategy_value,
                        created_at=item.created_at,
                        updated_at=item.updated_at,
                    )
                )
            session.add_all(app_details)
            return True