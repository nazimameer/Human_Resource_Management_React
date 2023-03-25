import React from "react";
import "./Activities.css";
function Activities() {
  return (
    <div className="w-1/2">
      <div className="activitiesbar w-4/5  mx-10 p-5 rounded-xl bg-white  flex flex-col ">
        <div className="text-xl font-medium">All Activities Today</div>
        <div className="taskdue flex flex-col overflow-y-scroll ">

          <div className="mt-5 border p-3 rounded-xl">
            <div>Muhammed Shamil Out.</div>
            <div className="text-xs mt-2 flex justify-between">
              <div>
                <div>Time: 3:32 Pm</div>
              </div>
            </div>
          </div>

          <div className="mt-5 border p-3 rounded-xl">
            <div>Muhammed Shamil In.</div>
            <div className="text-xs mt-2 flex justify-between">
              <div>
                <div>Time: 3:32 Pm</div>
              </div>
            </div>
          </div>


          <div className="mt-5 border p-3 rounded-xl">
            <div>Akshay Out.</div>
            <div className="text-xs mt-2 flex justify-between">
              <div>
                <div>Time: 3:32 Pm</div>
              </div>
            </div>
          </div>

          <div className="mt-5 border p-3 rounded-xl">
            <div>Rifaque Out.</div>
            <div className="text-xs mt-2 flex justify-between">
              <div>
                <div>Time: 3:32 Pm</div>
              </div>
            </div>
          </div>

          <div className="mt-5 border p-3 rounded-xl">
            <div>Muhammed Shafi In.</div>
            <div className="text-xs mt-2 flex justify-between">
              <div>
                <div>Time: 3:32 Pm</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Activities;
