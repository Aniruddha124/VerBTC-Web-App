import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";


export default function Graph_Test() {

    const [hydrated, setHydrated] = useState(false);
    
    useEffect(() => {
        setHydrated(true);
    },[])

    const graph = {
        "nodes": [
          {
            "id": 1,
            "label": "19snqSYnDSC4mDbv3pJuYgYqm5ctqwAxnm",
            "balance": 1.0
          },
          {
            "id": 2,
            "label": "21snqSYnDSC4mDbv3pJuYgYqm5ctqwAxnm",
            "balance": 1.0
          },
          {
            "id": 3,
            "label": "20snqSYnDSC4mDbv3pJuYgYqm5ctqwAxnm",
            "balance": 2.0
          }
        ],
        "edges": [
          {
            "from": 1,
            "to": 2
          },
          {
            "from": 1,
            "to": 3
          },
          {
            "from": 1,
            "to": 1
          }
        ]
      };
    
    const options = {
        layout: {
            hierarchical: false,
        },
        edges: {
            // color: "#000000"
            color: "#ffffff",
            arrows: {
                to: {
                    enabled: false,
                    scaleFactor: 1,
                    type: "arrow"
                }
            }
        },
        height: "500px"
    };

    const events = {
        select: function(event) {
          var { nodes, edges } = event;
        }
    };

    return ( 
        // <Graph graph={graph}></Graph>
        <div>
            {hydrated && <Graph graph={graph} options={options} events={events} />}
        </div>
    );
}
