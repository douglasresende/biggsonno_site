class AddNewsletter < ActiveRecord::Migration
  def change
    create_table :newsletters do |t|
      t.string  :name
      t.string  :email
      t.timestamps
    end
  end
end
