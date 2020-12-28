jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimOr",
                  "parameter": [ {
                    "action": "jimOr",
                    "parameter": [ {
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },"" ]
                    },{
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },"" ]
                    } ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Category_1",
                      "property": "jimGetSelectedValue"
                    },"Ida y vuelta" ]
                  },{
                    "action": "jimEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_5",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/49f24a7c-d384-4d61-b3be-ad00b7ff8981"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "action": "jimSystemDate"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "action": "jimSystemDate"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("change", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_1",
                  "property": "jimGetSelectedValue"
                },"Sólo ida" ]
              },
              "actions": [
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Input_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_1",
                  "property": "jimGetSelectedValue"
                },"Ida y vuelta" ]
              },
              "actions": [
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-Input_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_5": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_5 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_1 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#E2202C",
                        "border-right-color": "#E2202C",
                        "border-bottom-color": "#E2202C",
                        "border-left-color": "#E2202C"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#35B736",
                        "border-right-color": "#35B736",
                        "border-bottom-color": "#35B736",
                        "border-left-color": "#35B736"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_5": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_5 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Paragraph_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#007BFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#0069D9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Paragraph_1")) {
      jEvent.undoCases(jFirer);
    }
  });