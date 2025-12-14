import Modal from "@/components/modal";
import PackageCard from "@/components/package-card";

export default function AdminPacksPage() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-6">Manage Packages</h1>
          <p className="mb-4">
            Here you can add, edit, or remove travel Packages and control them.
          </p>
        </div>
        <div>
          <Modal
            title="Create Package"
            description="Enter your package details below."
            createClassName="bg-orange-600 text-white hover:bg-orange-700 hover:text-white font-semibold  rounded-lg"
            packages
          >
            + Create
          </Modal>
        </div>
      </div>
      <div className="max-w-7xl py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PackageCard show />
        <PackageCard show />
        <PackageCard />
        <PackageCard />
      </div>
    </div>
  );
}
