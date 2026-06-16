# Architecture Document

## useLocation

### What does this hook do?

`useLocation` is a custom hook that retrieves all fragrance sale location data
from `locService`. It returns an array of `RecommendationLocation` objects,
each containing a fragrance and its associated sale locations.

### How did you decide what logic to include?

The hook contains presentation logic, so it calls the service and returns
the data. No filtering or transformation is done here since the logic belongs in
the service layer. This separation means the hook can be reused in any component
that needs sale location data without duplicating service or repository calls.

### Where is this hook used?

`useLocation` is invoked in `Location.tsx` to match filtered fragrances
to their sale locations and render them alongside the fragrance name.

---

## locService

### What does this service do?

`locService` is the business logic layer for fragrance sale location data.
It provides two methods, `getAll` which returns all sale location data, and
`getByFragranceId` which returns the sale locations for a specific fragrance
by its id.

### How did you decide what logic to include?

The service handles any logic that sits between the component and the data.
This keeps `locRepo` focused on data access and the component focused
purely on rendering. If the filtering logic needed to change, it would only
need to change in one place.

### Where is this service used?

`locService` is called by `useLocation`, used by `Location.tsx`.

---

## locRepo

### What does this repository do?

`locRepo` is the data access layer for fragrance sale location data. It defines
CRUD methods, such as `getAll` which returns all sale locations, `getById` which returns
a single location entry by its own id, and `getByFragranceId` which returns a
location entry by its fragrance id.

### How did you decide what logic to include?

The repository contains only data access logic. It reads directly from
`locRepoData.ts` and returns raw data. This makes it swappable with
the test data for API calls once the backend is established.

### Where is this repository used?

`locRepo` is called by `locService`, called by `useLocation`,
used in `Location.tsx`.

---

## locRepoData.ts

### What does this test data do?

`locRepoData.ts` defines the `RecommendationLocation` type and provides an
array of 20 test objects, each pairing a `Fragrance` object from `scentRepoData.ts`
with an array of sale location strings.

### How did you decide what logic to include?

Rather than duplicating the fragrance data, the test data imports directly from
the existing `fragranceData` array and extends it with sale location
information.

### Where is this test data used?

`locRepoData.ts` is imported by `locRepo`, which passes it to `locService`,
then to `useLocation`, and finally to `Location.tsx`.
