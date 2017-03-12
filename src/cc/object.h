#ifndef _OBJECT_HEADER_
#define _OBJECT_HEADER_

#include <vector>
#include <memory>
#include <glm/vec3.hpp>

namespace physics {

  class Object;

  class Object {
    protected:
      /**
       * @param std::vector All of the objects children
       */
      std::vector<std::unique_ptr<Object> > children;

      /**
       * @param std::vector All of the forces on the object
       */
      std::vector<glm:vec3> forces;

    public:
      /**
       * Constructor
       */
      Object();

      /**
       * Constructor
       */
      Object(double mass);

      /**
       * Constructor
       */
      Object(double mass, glm::vec3 position);

      /**
       * Destructor
       */
      ~Object();

      /**
       * Set objects mass
       *
       * @param {Double} mass Mass units
       *
       * @retunr Object self reference
       */
      const Object& setMass(double mass);

      /**
       * Set objects mass
       *
       * @param {Double} mass Mass units
       *
       * @retunr Object self reference
       */
      const Object& setPosition(glm::vec3 position);

      /**
       * Apply a force to object
       *
       * @param {Vector3} force
       *
       * @return Object self reference
       */
      const Object& applyForce(glm::vec3 force);
  };
}
#endif // _OBJECT_HEADER_

