PROJECT(RESEARCH_CHAI_SCRIPT)
CMAKE_MINIMUM_REQUIRED(VERSION 2.8)

# Use C++14.
ADD_DEFINITIONS("-std=c++14")

# Reference ChaiScript inlcudes.
INCLUDE_DIRECTORIES(${CMAKE_SOURCE_DIR}/../ChaiScript/include)

ADD_EXECUTABLE(researchChaiScript main.cpp)
TARGET_LINK_LIBRARIES(researchChaiScript dl pthread)

ADD_EXECUTABLE(factory factory.cpp)
TARGET_LINK_LIBRARIES(factory dl pthread)
