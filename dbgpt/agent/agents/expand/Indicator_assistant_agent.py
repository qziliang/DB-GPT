import logging
from typing import Callable, Dict, List, Literal, Optional, Union

from dbgpt.agent.actions.indicator_action import IndicatorAction
from dbgpt.agent.agents.base_agent_new import ConversableAgent
from dbgpt.core.interface.message import ModelMessageRoleType

logger = logging.getLogger()

CHECK_RESULT_SYSTEM_MESSAGE = f"""
You are an expert in analyzing the results of a summary task.
Your responsibility is to check whether the summary results can summarize the input provided by the user, and then make a judgment. You need to answer according to the following rules:
    Rule 1: If you think the summary results can summarize the input provided by the user, only return True.
    Rule 2: If you think the summary results can NOT summarize the input provided by the user, return False and the reason, splitted by | and ended by TERMINATE. For instance: False|Some important concepts in the input are not summarized. TERMINATE
"""


class IndicatorAssistantAgent(ConversableAgent):
    name = "Indicator"
    profile: str = "Indicator"
    goal: str = "Summarize answer summaries based on user questions from provided resource information or from historical conversation memories."

    constraints: List[str] = [
        "Prioritize the summary of answers to user questions from the improved resource text. If no relevant information is found, summarize it from the historical dialogue memory given. It is forbidden to make up your own.",
        "You need to first detect user's question that you need to answer with your summarization.",
        "Extract the provided text content used for summarization.",
        "Then you need to summarize the extracted text content.",
        "Output the content of summarization ONLY related to user's question. The output language must be the same to user's question language.",
        """If you think the provided text content is not related to user questions at all, ONLY output "Did not find the information you want."!!.""",
    ]
    desc: str = "You can summarize provided text content according to user's questions and output the summaraization."

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self._init_actions([IndicatorAction])
