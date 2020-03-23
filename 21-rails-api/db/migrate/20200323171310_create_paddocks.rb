class CreatePaddocks < ActiveRecord::Migration[5.2]
  def change
    create_table :paddocks do |t|
      t.string :name

      t.timestamps
    end
  end
end
