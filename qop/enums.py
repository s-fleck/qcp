from enum import IntEnum

PREHEADER_LEN: int = 2


class Command(IntEnum):
    DAEMON_START = 101
    DAEMON_STOP = 102
    DAEMON_IS_RUNNING = 103
    QUEUE_START = 201
    QUEUE_STOP = 202
    QUEUE_IS_ACTIVE = 203
    QUEUE_PUT = 204
    QUEUE_FLUSH_PENDING = 205
    QUEUE_FLUSH_ALL = 206
    QUEUE_PROGRESS = 207
    QUEUE_ACTIVE_PROCESSES = 208


class PayloadClass(IntEnum):
    VALUE = 1  # a single value {"value": <value>}
    TASK = 2
    QUEUE_PROGRESS = 3


class TaskType(IntEnum):
    ECHO = 1
    FILE = 2
    DELETE = 3
    COPY = 4
    MOVE = 5
    CONVERT = 6
    FAIL = 7


class Status(IntEnum):
    FAIL = 0
    OK = 1
    SKIP = 2
    RUNNING = 3
    PENDING = 4


class FileExistsAndIsIdenticalError(Exception):
    pass


def is_enum_member(x: int, enum):
    try:
        enum(x)
        return True
    except ValueError:
        return False