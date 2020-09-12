//*****************  PARSE TREE LIBRARY INSTALLATION  ********************/
var $ = go.GraphObject.make;
var myDiagram =
    $(go.Diagram, "myDiagramDiv",
        { // enable Ctrl-Z to undo and Ctrl-Y to redo
            "undoManager.isEnabled": true,
            layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
                { angle: 90, layerSpacing: 35 })
        });
// the template we defined earlier
myDiagram.nodeTemplate =
    $(go.Node, "Horizontal",
        { background: "#44CCFF" },
        $(go.TextBlock, "Default Text",
            { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
            new go.Binding("text", "name"))
    );
// define a Link template that routes orthogonally, with no arrowhead
myDiagram.linkTemplate =
    $(go.Link,
        { routing: go.Link.Orthogonal, corner: 5 },
        $(go.Shape, // the link's path shape
            { strokeWidth: 3, stroke: "#555" }));

function generaterParseTree(question) {
    var count = 1;
    var arr = []
    arr.push({ key: count, name: question.name });
    if (question.children) {
        checkAndPush(question.children, 1);
    }
    
    function pushArr(key, parent, name) {
        arr.push({ key, parent, name });
    }
    function checkAndPush(children, parent) {
        if (children) {
            for (const child of children) {
                let key = count + 1;
                pushArr(key, parent, child.name,)
                count++;
                if (child.children) {
                    checkAndPush(child.children, key);
                }
            }
        }
    }
    var model = $(go.TreeModel);
    model.nodeDataArray = arr;
    myDiagram.model = model;
}

function checkParseTree(value) {
    console.log(value);
    if (value === 1) {
        return generaterParseTree(question1);
    }
    generaterParseTree(question2);
}


let question1 = {
    name: 'E',
    children: [
        {
            name: 'E',
            children: [
                {
                    name: 'T',
                    children: [
                        {
                            name: 'T',
                            children: [
                                {
                                    name: 'F',
                                    children: [
                                        {
                                            name: 'id',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'B',
                            children: [
                                {
                                    name: '*',
                                }
                            ]
                        },
                        {
                            name: 'F',
                            children: [
                                {
                                    name: 'num',
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            name: 'A',
            children: [
                {
                    name: '+',
                }
            ]
        },
        {
            name: 'E',
            children: [
                {
                    name: 'E',
                    children: [
                        {
                            name: 'T',
                            children: [
                                {
                                    name: 'F',
                                    children: [
                                        {
                                            name: 'id',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'A',
                    children: [{
                        name: '-',
                    }]
                },
                {
                    name: 'T',
                    children: [
                        {
                            name: 'T',
                            children: [
                                {
                                    name: 'F',
                                    children: [
                                        {
                                            name: 'id',
                                        }
                                    ]
                                }
                            ]
                        }, {
                            name: 'B',
                            children: [
                                {
                                    name: '-',
                                }
                            ]
                        }, {
                            name: 'F',
                            children: [
                                {
                                    name: 'id',
                                }
                            ]
                        }
                    ]
                },
            ]
        },
    ]
}


let question2 = {
    name: 'E',
    children: [
        {
            name: 'E',
            children: [
                {
                    name: 'T',
                    children: [
                        {
                            name: 'F',
                            children: [
                                {
                                    name: '-F',
                                    children: [
                                        {
                                            name: '-id',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'A',
            children: [
                {
                    name: '*',
                }
            ]
        },
        {
            name: 'T',
            children: [
                {
                    name: 'T',
                    children: [
                        {
                            name: '(',
                        },
                        {
                            name: 'E',
                            children: [
                                {
                                    name: 'E',
                                    children: [
                                        {
                                            name: 'T',
                                            children: [
                                                {
                                                    name: 'F',
                                                    children: [
                                                        {
                                                            name: 'num',
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'A',
                                    children: [
                                        {
                                            name: '+',
                                        }
                                    ]
                                },
                                {
                                    name: 'T',
                                    children: [
                                        {
                                            name: 'F',
                                            children: [
                                                {
                                                    name: 'num',
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: ')',
                        },
                    ]
                },
                {
                    name: 'B',
                    children: [
                        {
                            name: '/',
                        }
                    ]
                },
                {
                    name: 'F',
                    children: [
                        {
                            name: 'id',
                        }
                    ]
                },
            ]
        },
    ]
}

generaterParseTree(question1);
