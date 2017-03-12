#ifndef _WORLD_HEADER_
#define _WORLD_HEADER_

#include "object.h"

namespace physics {

class World : public Object {
  public:
    World();
    ~World();

  /**
   * Simulate the world
   *
   * @param {Double} seconds How many seconds to simulate
   *
   * @return World self reference
   */
  const World& simulate(double time);
};

}
#endif //_WORLD_HEADER_

